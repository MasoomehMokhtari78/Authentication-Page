from django.urls import path
from . import views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('register', views.registerUser),
    path('login', views.loginUser),
    path('getuser', views.getUser),
     path('refresh', jwt_views.TokenRefreshView.as_view()),
]