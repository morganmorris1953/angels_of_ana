# users/urls.py
from django.urls import include, path
#  from .views import SignupView
 
urlpatterns = [
path('auth/', include('rest_auth.urls')),    
path('auth/register/', include('rest_auth.registration.urls')),
    #  path('signup/', Signup.as_view(), name='signup')
]
