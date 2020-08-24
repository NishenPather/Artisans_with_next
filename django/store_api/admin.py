from django.contrib import admin
from .models import Store
from mapbox_location_field.admin import MapAdmin

admin.site.register(Store, MapAdmin)    
