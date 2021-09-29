from django.shortcuts import render
from django.contrib import admin
from app.models import Words
import psycopg2


def saved_words(request):
    context = {
        "content": Words.objects.all()
    }
    return render(request, "index.html", context)

def add_words(request, saveWord):
    conn = psycopg2.connect("dbname=WordsDB user=postgres password=postgresScott1")
    cur = conn.cursor()
    cur.execute('INSERT INTO app_words (content) VALUES (%s)', (saveWord))
    conn.commit()
    cur.close()
    conn.close()
    return render(request, 'index.html')

def index(request):
    return render(request, 'index.html')



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