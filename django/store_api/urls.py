from django.urls import path, include
from . import views
from rest_framework import routers
from .api import StoreViewSet

app_name = 'store_api'

router = routers.DefaultRouter()
router.register('api/store', StoreViewSet, 'stores')

urlpatterns = router.urls


# urlpatterns = [
#   path('edit', views.business_update, name='edit')
# ]


 

