from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('T1LessonOne', views.index),
    path('T1LessonTwo', views.index),
    path('T2LessonOne', views.index),
    path('T2LessonTwo', views.index),
]