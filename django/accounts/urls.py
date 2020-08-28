from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from accounts import views
from knox import views as knox_views

app_name = 'accounts'

 

urlpatterns = [
  path('api/auth', include('knox.urls')),
  path('api/auth/register', RegisterAPI.as_view()),
  path('api/auth/login', LoginAPI.as_view()),
  path('api/auth/user', UserAPI.as_view()),
  path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
  path('', views.login_view, name='login'),
  path('logout', views.logout_view, name='logout'),
]