from django.urls import path, include
from . import views
from rest_framework import routers
from .api import GEOViewSet


router = routers.DefaultRouter()

router.register('api/geo', GEOViewSet, 'geojson')

urlpatterns = router.urls
