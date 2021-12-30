from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_auth.registration.views import LoginView
from rest_framework.permissions import IsAuthenticated
#  from django.views import
# Create your views here.

import stripe
stripe.api_key = "sk_test_51K3gRwB9NwtY2gLjmNEvwrWCxjBHIi3C74kktSSyudX8x0Q0uGFwlKgIWRLTlgdBzX5s4l0uI1irP28B7uKsvvbI00ZfF4wEQj"

stripe.Product.list(limit=3)

class User(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (IsAuthenticated)

    def get(self, request, format=None):
        print('from user API')
        content = {
            'user': str(request.user),
            'auth': str(request.auth)}
        print(content)
        return Response(content)


#  class SignupView(generic.CreateView):
    #  form_class = UserCreationForm
