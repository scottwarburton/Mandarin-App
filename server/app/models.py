from django.db import models

# Create your models here.
class Words(models.Model):
    content = models.TextField()

    def __str__(self):
        return self.content


#python3 manage.py makemigrations app
#python3 manage.py sqlmigrate app 0001_initial
#python3 manage.py migrate