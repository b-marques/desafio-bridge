import urllib.request
import json
from django.http import JsonResponse
from django.core import serializers


def GITHUB_REPOS_API_LINK(search_term):
    return "https://api.github.com/search/repositories?q=" + search_term


def GITHUB_USER_REPOS_API_LINK(user):
    return "https://api.github.com/users/" + user + "/repos"


def fetch_repos(request):
    search_term = str(request.GET.get('name')).replace(" ", "+")
    with urllib.request.urlopen(GITHUB_REPOS_API_LINK(search_term)) as url:
        responseData = json.loads(url.read().decode())
        return JsonResponse(responseData)


def fetch_user_repos(request):
    user = str(request.GET.get('user')).replace(" ", "+")
    with urllib.request.urlopen(GITHUB_USER_REPOS_API_LINK(user)) as url:
        responseData = json.loads(url.read().decode())
        responseData = {i: responseData[i]
                        for i in range(0, len(responseData))}
        return JsonResponse(responseData)
