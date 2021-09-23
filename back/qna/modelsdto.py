from rest_framework import serializers
from .models import QnA, QnA_Reply


class QnASerializer(serializers.ModelSerializer):
    class Meta:
        model = QnA
        fields = ['qnaId', 'qnaTitle', 'qnaContent', 'qnaImg', 'bookId']


class QnA_ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = QnA_Reply
        fields = ['replyId', 'replyContent', 'qnaId']


class QnAListSerializer(serializers.ModelSerializer):
    class Meta:
        model = QnA
        fields = ['qnaId', 'qnaTitle']
