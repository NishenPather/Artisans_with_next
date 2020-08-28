from .models import Store
from rest_framework import viewsets, permissions
from .serializers import StoreSerializer


class StoreViewSet(viewsets.ModelViewSet): 
   permission_classes = [
     permissions.IsAuthenticated
   ]
   serializer_class = StoreSerializer 

   def get_queryset(self):
     username = self.request.user.username
     stores = Store.objects.filter(owner__username__contains=username)
     return stores

   def perform_create(self, serializer):
     serializer.save(owner=self.request.user)
   



    