from django.shortcuts import render
from django.contrib import admin
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WordSerializer
from .models import Words
import psycopg2


def saved_words(request):
    #get words from postgres
    words = {
        "content": Words.objects.all()
    }
    #return words to react
    return render(request, "index.html", words)

def add_words(request, saveWord):
    #add word to postgres
    conn = psycopg2.connect("dbname=postgres user=postgres")
    cur = conn.cursor()
    cur.execute('INSERT INTO (content) VALUES (%s)', (saveWord))
    conn.commit()
    cur.close()
    conn.close()
    #return save index page
    return render(request, 'index.html')

def index(request):
    return render(request, 'index.html')


"""
class WordView(viewsets.ModelViewSet):
    serializer_class = WordSerializer
    queryset = Words.objects.all()

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