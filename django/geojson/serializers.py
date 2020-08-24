from rest_framework import serializers
from geojson_serializer.serializers import geojson_serializer
from store_api.models import Store
from rest_framework_gis.serializers import GeoFeatureModelSerializer


@geojson_serializer('location')
class GEOSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields =['name', 'shop_type', 'address', 'location']


class CustomSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Store
        geo_field = "location"
        fields = ('name', 'shop_type', 'address', 'location')