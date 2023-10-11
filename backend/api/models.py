from django.db import models
from django.contrib import admin
from django.contrib.auth.models import AbstractBaseUser
from django.utils import timezone
from django.contrib.auth.models import UserManager

class UserModel(AbstractBaseUser):
    username = models.CharField(max_length=100, unique=True, blank=False)
    firstName = models.CharField(max_length=100, blank=True)
    lastName = models.CharField(max_length=100, blank=True)
    email = models.EmailField(blank=False)
    phone = models.CharField(max_length=15, blank=True)
    is_admin = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = [username, email]

    objects = UserManager()