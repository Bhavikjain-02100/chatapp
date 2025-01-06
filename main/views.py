from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import RegisterSerializer, ProfileSerializer
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.files.storage import default_storage

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class ProfilePictureUpload(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        file = request.FILES['file']
        file_name = default_storage.save(file.name, file)
        file_url = default_storage.url(file_name)
        profile = request.user.profile
        profile.profile_picture = file_url
        profile.save()
        return Response({'file_url': file_url})
