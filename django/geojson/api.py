from store_api.models import Store
from rest_framework import viewsets, permissions
from .serializers import GEOSerializer, CustomSerializer



class GEOViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    permission_classes = [
     permissions.AllowAny
   ]
    serializer_class = CustomSerializer
