from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),  #need to delete
]

"""
    path('insert_word/', views.insert_word),
    path('show_words/', views.show_words, name='insert_word'),
    path('delete_word/<int:word_id>/', views.delete_word, name='delete_word'),
"""