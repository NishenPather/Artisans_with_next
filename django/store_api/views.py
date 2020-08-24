from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib.auth.models import User 
from .forms import BusinessForm
from .models import Store
from django.core.exceptions import ObjectDoesNotExist
from django.views.decorators.clickjacking import xframe_options_exempt
from django.contrib.gis.db.models.functions import AsGeoJSON

#if uploading Business profile picture, make sure to do request.FILES as an argument in the model form function

def ok_to_load_in_a_frame(request):
    return HttpResponse("portalmap.html")



def business_update(request):
  if not request.user.is_authenticated:
        return render(request, 'accounts/login.html') 
  username = request.user.username
  instance = get_object_or_404(Store, owner__username__contains=username)
  form = BusinessForm(request.POST, instance=instance)
  if form.is_valid():
    instance = form.save(commit=False)
    instance.owner = request.user
    instance.save()
    return redirect("reactview")
  return render(request, "business/business_update.html", {'form': form, 'instance': instance})



def create1_view(request):
  if not request.user.is_authenticated:
        return render(request, 'accounts/login.html')     
  if request.method == "POST":
    form = BusinessForm(request.POST)
    if form.is_valid():
      instance = form.save(commit=False)
      instance.owner = request.user
      instance.save()
      return redirect("reactview")
  else:
    form = BusinessForm()
  return render(request, "business/profile_create_1.html", {'form': form})  

def portalmap_view(request):
  username = request.user.username
  stores = Store.objects.filter(owner__username__contains=username)
  return render(request, "frontend/portalmap.html", {'store': stores})

  







