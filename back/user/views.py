from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken, ProfileSerializer, MyProfileSerializer
from .models import Profile


# from google.oauth2 import id_token
# from google.auth.transport import requests


@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


@api_view(['GET'])
def MyProfile(request):
    myProfile = Profile.objects.all().get(user_pk=request.user.id)
    print(request.user.id)
    serializer = MyProfileSerializer(myProfile)
    return Response(serializer.data)


@api_view(['POST'])
def MyEditProfile(request):
    print(request.data)
    # serializer = MyProfileSerializer(myProfile)
    return 0


class UserList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileUpdateAPI(generics.UpdateAPIView):
    lookup_field = "user_pk"
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
