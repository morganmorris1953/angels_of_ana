from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
# Create your views here.

stripe.api_key = 'pk_test_51K3gRwB9NwtY2gLjBpnSruJs15ObuDDNbWTpc8NY9LQk9TUpcQJRIckpgIzzCMvNyhFDnuJQUenip1PKJHOzAe1h00eYXUwmUc'

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
