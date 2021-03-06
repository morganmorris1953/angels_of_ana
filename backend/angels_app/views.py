from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import ( ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView )
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_auth.registration.views import LoginView
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages
from django.core.exceptions import ObjectDoesNotExist
from django_countries import countries
from django.urls import reverse_lazy
from django.views import generic
from django.shortcuts import redirect, render, get_object_or_404
from django.views.generic import ListView, DetailView, View
from django.db.models import Q
from django.http import Http404
from django.utils import timezone
from rest_framework.decorators import api_view
#  from core.models import Item, OrderItem, Order
#  from pyping.core import *
#  from .forms import CheckoutForm, CouponForm, RefundForm, PaymentForm
#  from .models import Item, OrderItem, Order, Address, Payment, Coupon, Refund, UserProfile, Variation, ItemVariation
#  from .serializers import ( ItemSerializer, OrderSerializer, ItemDetailSerializer, AddressSerializer, PaymentSerializer)
#  import random
#  import string
#  import stripe


from django.db import models
from rest_framework import viewsets
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import serializers
from angels_app.serializers import ProductSerializer, CustomUserSerializer, CartSerializer#  , ProductListSerializer
from angels_app.models import Product, ProductList, CustomUser, Cart
from rest_framework.viewsets import ModelViewSet
from django.views.decorators.csrf import csrf_exempt 
from rest_framework.parsers import JSONParser 


#  class ProductListViewSet(ModelViewSet):
    #  queryset = ProductList.objects.all()
    #  serializer_class = ProductListSerializer
#  , SignupViewSet, UserIDViewSet
class CartViewSet(ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    def put(self, request):
        return Response(status=status.HTTP_200_OK)
class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def put(self, request):
        return Response(status=status.HTTP_200_OK)

class LoginViewSet(ModelViewSet):
    http_method_names = ['GET']
    authentication_classes = [TokenAuthentication, SessionAuthentication, BasicAuthentication]
    permission_classes = (IsAuthenticated)
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class CustomUserViewSet(ModelViewSet):#  viewsets.ViewSet
    #  http_method_names = ['GET']
    #  permission_classes = (IsAuthenticated)
    queryset = CustomUser.objects.all()
    #  queryset = CustomUser.objects.distinct
    serializer_class = CustomUserSerializer
    def retrieve(self, request, email=None):
        queryset = CustomUser.objects.all()
        user = get_object_or_404(queryset, email=email)
        serializer=CustomUserSerializer(user)
        return Response(serializer.data)
    def sample_view(request):
        current_user = request.user
        print(current_user.id)
      

@csrf_exempt
def user_api(request):
    if request.method=='GET':
        email = request.GET.get('email')
        #  users = CustomUser.objects.get(email=email)
        user = get_object_or_404(CustomUser, email=email)
        print(user)
        print(user.id)
        return JsonResponse({'user_id': user.id})


@classmethod
def get_extra_actions(cls):
    return []

def get(self, request, format=None):
    print('from user API')
    content = {
        'user': str(request.user),
        'auth': str(request.auth)}
    print(content)
    return Response(content)



    #  def retrieve(self, request):
        #  return Response()
    #  authentication_classes = [TokenAuthentication, SessionAuthentication, BasicAuthentication]
#
#  class CustomUser(APIView):
    #  authentication_classes = [TokenAuthentication, SessionAuthentication, BasicAuthentication]
    #  permission_classes = (IsAuthenticated)

#  class CustomUserViewSet(viewsets.ViewSet):
    #  authentication_classes = [TokenAuthentication, SessionAuthentication, BasicAuthentication]
    #  permission_classes = (IsAuthenticated)
    #  def get(self, request, format=None):
        #  content = {
            #  'user': str(request.user),  # `django.contrib.auth.User` instance.
            #  'auth': str(request.auth),  # None
        #  }
        #  return Response(content)

#
    #  def list(self, request):
        #  queryset = User.objects.all()
        #  serializer = UserSerializer(queryset, many=True)
        #  return Response(serializer.data)
#
    #  def retrieve(self, request, pk=None):
        #  queryset = User.objects.all()
        #  user = get_object_or_404(queryset, pk=pk)
        #  serializer = UserSerializer(user)
        #  return Response(serializer.data)



class SignupViewSet(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'registration/signup.js'

    @classmethod
    def get_extra_actions(cls):
        return []

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    serializer = CustomUserSerializer(request.user)
    return Response(serializer.data)

#  class UserList(APIView):
    #  """
    #  Create a new user. It's called 'UserList' because normally we'd have a get
    #  method here too, for retrieving a list of all User objects.
    #  """
#
    #  permission_classes = (permissions.AllowAny,)
#
    #  def post(self, request, format=None):
        #  serializer = UserSerializerWithToken(data=request.data)
        #  if serializer.is_valid():
            #  serializer.save()
            #  return Response(serializer.data, status=status.HTTP_201_CREATED)
        #  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#











