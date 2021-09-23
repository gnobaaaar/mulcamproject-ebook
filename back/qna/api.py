from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import QnA, QnA_Reply
from .modelsdto import QnASerializer, QnA_ReplySerializer


@api_view(['GET'])
def QnAList(request, pk):
    qnas = QnA.objects.get(bookId=pk)
    serializer = QnASerializer(qnas, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def QnAMyList(request, pk):
    qnas = QnA.objects.get(userId=pk)
    serializer = QnASerializer(qnas, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def QnADetail(request, pk):
    qna = QnA.objects.get(qnaId=pk)
    serializer = QnASerializer(qna, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def QnACreate(request):
    serializer = QnASerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['PUT'])
def QnAUpdate(request, pk):
    qna = QnA.objects.get(qnaId=pk)
    serializer = QnASerializer(instance=qna, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def QnADelete(request, pk):
    qna = QnA.objects.get(qnaId=pk)
    qna.delete()
    return Response('Deleted')


@api_view(['GET'])
def ReplyList(request,pk):
    replies = QnA_Reply.objects.get(qnaId=pk)
    serializer = QnA_ReplySerializer(replies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def ReplyDetail(request, pk):
    reply = QnA_Reply.objects.get(replyId=pk)
    serializer = QnA_ReplySerializer(reply, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def ReplyCreate(request):
    serializer = QnA_ReplySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['PUT'])
def ReplyUpdate(request, pk):
    reply = QnA_Reply.objects.get(replyId=pk)
    serializer = QnA_ReplySerializer(instance=reply, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def ReplyDelete(request, pk):
    reply = QnA_Reply.objects.get(replyId=pk)
    reply.delete()
    return Response('Deleted')
