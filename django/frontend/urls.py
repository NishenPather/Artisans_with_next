from django.urls import path
from . import views

urlpatterns= [
  path("portal", views.reactview, name="reactview"),
  path("", views.landing_view, name="landing")
]