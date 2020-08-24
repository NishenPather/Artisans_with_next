from rest_framework import serializers
from .models import Store
from geojson_serializer.serializers import geojson_serializer

class StoreSerializer(serializers.ModelSerializer):
  class Meta:
    model = Store
    fields = "__all__"


