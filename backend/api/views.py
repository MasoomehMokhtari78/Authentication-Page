from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from .serializers import *
from api.models import UserModel
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.db import IntegrityError
from rest_framework_simplejwt.views import TokenRefreshView
import jwt
from django.conf import settings

@api_view(['POST'])
def registerUser(request):

    try:
        data = request.data
        user = UserModel.objects.create(
            username=data['username'],
            email=data['email'],
            phone=data['phone'],
            password=make_password(data['password'])
        )
        return Response("Successfully created new user.")
    except IntegrityError as e:
        return Response("This username is already taken.")

@api_view(['POST'])
def loginUser(request):
    data = request.data
    user = authenticate(username=data['username'], password=data['password'])
    if user is None:
        return Response('A user with this username and password was not found.')
    token = RefreshToken.for_user(user)
    return Response(({'id':user.id, 'refresh': str(token), 'access': str(token.access_token)}))


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def getUser(request):
    user = UserModel.objects.get(id=request.data['id'])
    serializer = UserSerializer(user,many=False)
    return Response(serializer.data)
