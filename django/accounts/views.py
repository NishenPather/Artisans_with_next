from django.shortcuts import render, redirect, get_object_or_404, reverse, Http404
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages 
from django.conf import settings
from django.core.mail import send_mail
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseNotFound, Http404, HttpResponseRedirect, HttpResponsePermanentRedirect
from Artisans import helpers
from store_api.models import Store



def login_view(request):
  if request.user.is_authenticated:
    return redirect('reactview')
  else:
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('reactview')
        else:
          return render(request, "accounts/login_failed.html")
    return render(request, 'accounts/login.html')


def logout_view(request):
  if request.method == 'GET':
     logout(request)
     return render(request, "accounts/logout.html", {})

