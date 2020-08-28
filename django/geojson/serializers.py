from store_api.models import Store
from rest_framework_gis.serializers import GeoFeatureModelSerializer




class CustomSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Store
        geo_field = "location"
        fields = ('name', 'shop_type', 'address', 'location')