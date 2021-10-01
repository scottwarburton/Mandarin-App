from django.http.response import JsonResponse
from django.shortcuts import render
from django.template import RequestContext
from django.contrib import admin
from app.models import Words
from django.http import JsonResponse
import psycopg2
from django.views.decorators.csrf import csrf_exempt, csrf_protect
import json

@csrf_exempt
def index(request):
    if request.method == "POST":
        data = json.loads(request.body)

        if "wordToDelete" in data:
            wordToDelete = data["wordToDelete"]
            conn = psycopg2.connect(
                host="localhost",
                database="WordsDB",
                user="postgres",
                password="postgresScott1"
            )
            cur = conn.cursor()
            cur.execute("""DELETE FROM public."app_words" WHERE "englishWord" = ('%s');""" % (wordToDelete))
            conn.commit()
            cur.close()
            conn.close()
            return render(request, "index.html")

        else:
            englishWord = data["englishWord"]
            mandarinWord = data["mandarinWord"]
            pinyinWord = data["pinyinWord"]
            conn = psycopg2.connect(
                host="localhost",
                database="WordsDB",
                user="postgres",
                password="postgresScott1"
            )
            cur = conn.cursor()
            cur.execute("""INSERT INTO public."app_words"("englishWord", "mandarinWord", "pinyinWord") VALUES ('%s', '%s', '%s');""" % (englishWord, mandarinWord, pinyinWord))
            conn.commit()
            cur.close()
            conn.close()
            return render(request, "index.html")

    return render(request, 'index.html')

