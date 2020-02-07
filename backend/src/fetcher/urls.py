from django.urls import path
from fetcher import views

urlpatterns = [
    path('fetch_repos/', views.fetch_repos, name='fetch_repos'),
    path('fetch_user_repos/', views.fetch_user_repos, name='fetch_user_repos'),
]
