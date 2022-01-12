from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.conf import settings
from django.db import models
from django.db.models import Sum
from django.shortcuts import reverse
from django_countries.fields import CountryField
from django.db import models
#  from django.contrib.auth.models import User
from django.conf import settings
CustomUser = settings.AUTH_USER_MODEL
#  from ..angels_proj/settings import AUTH_USER_MODEL
#############################################################
#  TODO: figure out why django_countries isn't recognized nor does it show up in the pip list
class CustomUser(AbstractUser):
    #  name = models.TextField(max_length=255, default='null')
    email = models.EmailField()
    password = models.CharField(max_length=255)
    #  purchaseList = models.TextField()
    #  purchaseList = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='cart', default='')
    def __str__(self):
        return self.email


class Product(models.Model):
    name = models.CharField(max_length=50, default='')
    price = models.IntegerField()
    description = models.TextField()
    #  list = models.ForeignKey(ProductList, on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return self.name

class Cart(models.Model):
    #  name = models.CharField(max_length=50, default='')
    #  price = models.IntegerField()
    #  description = models.TextField()
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='products', null = True)
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='carts', null = True)
    #  def __str__(self):
        #  return self.name

class ProductList(models.Model):
    name = models.CharField(max_length=64)
    price = models.IntegerField()
    description =  models.CharField(max_length=255)

    def __str__(self):
        return self.name

#
#


