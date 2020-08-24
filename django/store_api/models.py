from django.db import models
from django.contrib.auth.models import User
from mapbox_location_field.spatial.models import SpatialLocationField
from mapbox_location_field.models import AddressAutoHiddenField
from phonenumber_field.modelfields import PhoneNumberField




class Store(models.Model):
  name = models.CharField(max_length=100)
  shop_type = models.CharField(max_length=100)
  Permanent_location = models.BooleanField
  bio = models.TextField(max_length=1500)
  Phone = PhoneNumberField()
  location = SpatialLocationField(map_attrs= {"style":"mapbox://styles/alexbohlin/ckcmcftt01hxi1kpgmiv520n0", "zoom":13, "center":[-74.0060, 40.7128], "cursor_style":'pointer',"marker_color":"blue", "rotate":False,"geocoder":True, "fullscreen_button":True, "navigation_buttons":True, "track_location_button":True, "readonly":True,"placeholder":"Address  below", },)
  address = AddressAutoHiddenField()
  owner = models.ForeignKey(User, on_delete=models.CASCADE,)

# UPDATE function needed for ALL models
# Opening hours function needed, which can also be updated, and the 
# information can be used to determined whether store is OPEN or CLOSED
# on map pop-up 

# NOTE: Opening hours attached to each instantiated object (store), and 
# should be added as a datetime field probably 




