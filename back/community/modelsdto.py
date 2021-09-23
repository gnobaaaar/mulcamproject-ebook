from rest_framework import serializers
from .models import Communication, CommunicationComment


class CommunicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Communication
        fields = ['communicationId', 'communicationTitle', 'communicationContent', 'communicationImg',
                  'communicationDate', 'communicationViews', 'communicationCategory', 'userId']


class Communication_CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunicationComment
        fields = ['commentId', 'commentContent', 'communicationId']


class CommunicationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Communication
        fields = ['communicationId', 'communicationTitle',
                  'communicationDate', 'communicationViews', 'userId']
