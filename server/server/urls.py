
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from app import views

router = routers.DefaultRouter()
router.register(r'words', views.WordView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls')),  #need to delete
    path('api/', include(router.urls)),
]