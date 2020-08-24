from django import forms
from .models import Store


class BusinessForm(forms.ModelForm):
  class Meta:
      model = Store
      fields = [
        "name",
        "shop_type",
        "bio",
        "Phone",
        "location",
        "address"
      ]

#class BusinessForm(forms.Form):
  #  business_name = forms.CharField(max_length=50)
   # email = forms.EmailField()
  #  active = forms.BooleanField(required=False) # required=False makes the field optional
   # created_on = forms.DateTimeField()
   # last_logged_in = forms.DateTimeField()

