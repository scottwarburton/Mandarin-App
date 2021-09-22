from django.shortcuts import render
from django.contrib import admin

def index(request):
    return render(request, 'weather/index.html')