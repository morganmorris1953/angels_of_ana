# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # name = models.TextField(max_length=255, default='null')
    # email = models.EmailField()
    def __str__(self):
        return self.email