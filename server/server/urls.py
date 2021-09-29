
import rest_framework
from app import serializers
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from app import views
from rest_framework import viewsets
from app.serializers import WordSerializer
from app.models import Words

class WordView(viewsets.ModelViewSet):
    queryset = Words.objects.all()
    serializer_class = WordSerializer

router = routers.DefaultRouter()
router.register(r'words', WordView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('api-auth/', include(router.urls)),
    path('saved_words/', views.saved_words),
    path('add_words/', views.add_words),
]