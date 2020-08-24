from .models import Store
from rest_framework import viewsets, permissions
from .serializers import StoreSerializer

class StoreViewSet(viewsets.ModelViewSet): 
   permission_classes = [
     permissions.IsAuthenticated
   ]
   serializer_class = StoreSerializer 
   queryset = Store.objects.all()
   



    