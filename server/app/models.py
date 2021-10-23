from django.db import models

# Create your models here.
class Words(models.Model):
    englishWord = models.TextField(default="")
    mandarinWord = models.TextField(default="")
    pinyinWord = models.TextField(default="")

    def __str__(self):
        return self.englishWord


#python3 manage.py makemigrations app
#python3 manage.py sqlmigrate app 0001_initial
#python3 manage.py migrate