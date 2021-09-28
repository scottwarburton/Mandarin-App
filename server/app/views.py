from django.shortcuts import render
from django.contrib import admin
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WordSerializer
from .models import Words

def index(request):
    return render(request, 'index.html')    #need to delete

class WordView(viewsets.ModelViewSet):
    serializer_class = WordSerializer
    queryset = Words.objects.all()


"""
def show_words(request):
    context = { 'word_list': Words.objects.all() }
    return render(request, 'index.html', context)

def insert_word(request):
    word = Words(content = request.POST['content'])
    word.save()
    return render(request, 'index.html')

def delete_word(request, word_id):
    word_to_delete = Words.objects.get(id=word_id)
    word_to_delete.delete()
    return render(request, 'index.html')
"""