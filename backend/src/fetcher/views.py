import urllib.request
import json
import re
from django.http import JsonResponse
from django.core import serializers


def GITHUB_REPOS_API_LINK(search_term):
    return "https://api.github.com/search/repositories?q=" + search_term


def GITHUB_USER_REPOS_API_LINK(user):
    return "https://api.github.com/users/" + user + "/repos"


def fetch_repos(request):
    search_term = str(request.GET.get('name')).replace(" ", "+")
    page = "&page=" + str(request.GET.get('page')).replace(" ", "+")
    with urllib.request.urlopen(GITHUB_REPOS_API_LINK(search_term) + page) as url:
        pages = {}
        if url.info()['Link'] != None:
            links_list = url.info()['Link'].split(', ')
            for link in links_list:
                result = re.search('rel="(.*)"', link).group(1)
                page_number = int(re.search('page=(.*)>', link).group(1))
                if result == 'prev':
                    pages['prev'] = page_number
                    continue
                if result == 'next':
                    pages['next'] = page_number
                    continue
                if result == 'first':
                    pages['first'] = page_number
                    continue
                if result == 'last':
                    pages['last'] = page_number
                    continue

        responseData = json.loads(url.read().decode())
        responseData['pages'] = pages
        return JsonResponse(responseData)


def fetch_user_repos(request):
    user = str(request.GET.get('user')).replace(" ", "+")
    with urllib.request.urlopen(GITHUB_USER_REPOS_API_LINK(user)) as url:
        responseData = json.loads(url.read().decode())
        responseData = {i: responseData[i]
                        for i in range(0, len(responseData))}
        return JsonResponse(responseData)
