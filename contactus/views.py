from django.shortcuts import render
from . import forms
from .models import Contact

# Create your views here.

def index(request):
    if request.method == "POST":
        form = forms.ContactForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = forms.ContactForm()
    return render(request, 'index.html', {'form': form})


def submissions_view(request):
    contacts = Contact.objects.all()
    return render(request, 'submissions.html', {'contacts': contacts})
    