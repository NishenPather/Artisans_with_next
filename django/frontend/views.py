from django.shortcuts import render
from store_api.models import Store

def reactview(request):
  if not request.user.is_authenticated:
        return render(request, 'accounts/login.html')     
  username = request.user.username
  businesses = Store.objects.filter(owner__username__contains=username)
  return render(request, 'frontend/index.html', {"business": businesses})

def landing_view(request):
  return render(request, 'frontend/landing.html')
