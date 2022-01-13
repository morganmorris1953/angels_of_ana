# users/serializers.py
from rest_framework.serializers import ModelSerializer
from .models import CustomUser, Product, Cart
from rest_framework import serializers
class CartSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields = ['product_id', 'user_id'] 

class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'password']

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description']


#  class UserSerializer(serializers.ModelSerializer):
    #  class Meta: model=CustomUser
    #  fields=('id','name','email','country','city','needs','urgency','details')

## Serializes new user sign ups that responds with the new user's information including a new token.
#  class UserSerializerWithToken(serializers.ModelSerializer):
#
    #  token = serializers.SerializerMethodField()
    #  password = serializers.CharField(write_only=True)
#
    #  def get_token(self, obj):
        #  jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        #  jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
#
        #  payload = jwt_payload_handler(obj)
        #  token = jwt_encode_handler(payload)
        #  return token
#
    #  def create(self, validated_data):
        #  password = validated_data.pop('password', None)
        #  instance = self.Meta.model(**validated_data)
        #  if password is not None:
            #  instance.set_password(password)
        #  instance.save()
        #  return instance
#
    #  class Meta:
        #  model = CustomUser
        #  fields = ['token', 'username', 'password']
