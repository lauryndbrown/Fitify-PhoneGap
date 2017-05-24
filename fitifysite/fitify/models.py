from django.db import models
from tastypie.utils.timezone import now
from django.contrib.auth.models import User

class Character(models.Model):
    user = models.ForeignKey(User)
    name = models.CharField(max_length=200)
    level = models.IntegerField(default=1)
