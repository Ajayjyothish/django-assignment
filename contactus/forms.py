from django import forms
from . import models

class ContactForm(forms.ModelForm):

    name = forms.CharField(min_length=3, max_length=100)
    phone= forms.IntegerField(required=False, min_value=1000000000, max_value=9999999999)
    description = forms.CharField(min_length=20)
    class Meta:
        model = models.Contact
        fields = ['name','email', 'phone', 'description']