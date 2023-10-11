from rest_framework import serializers
from django.contrib.auth import authenticate
from api.models import UserModel
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = UserModel
        fields = '__all__'
    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return ({'refresh': str(token), 'access': str(token.access_token)})