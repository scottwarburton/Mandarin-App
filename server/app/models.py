from django.db import models

# Create your models here.
class Words(models.Model):
    englishWord = models.TextField()
    mandarinWord = models.TextField()
    pinyinWord = models.TextField()

    def __str__(self):
        return self.englishWord


#python3 manage.py makemigrations app
#python3 manage.py sqlmigrate app 0001_initial
#python3 manage.py migrate