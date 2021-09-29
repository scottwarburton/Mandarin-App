
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
#from rest_framework import routers
from app import views

"""
router = routers.DefaultRouter()
router.register(r'words', views.WordView, 'app')
"""

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('', include('app.urls')),  #app.urls
    path('', views.index),
    #path('api/', include(router.urls)),
    path('saved_words/', views.saved_words),
    path('add_words/', views.add_words),
]