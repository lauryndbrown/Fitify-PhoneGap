from django.db import models

class Character(models.Model):
    name = models.CharField(max_length=200)
    level = models.IntegerField(default=1)
