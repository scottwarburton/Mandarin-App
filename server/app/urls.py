from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('T1L1', views.index),
    path('T1L2', views.index),
    path('T2L1', views.index),
    path('T2L2', views.index),
]