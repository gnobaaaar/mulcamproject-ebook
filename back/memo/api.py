from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Memo
from .modelsdto import MemoSerializer, MemoCreateSerializer, MemoUpdateSerializer


@api_view(['GET'])
def MemoList(request):
    memos = Memo.objects.all().filter(userId=request.user.id)
    serializer = MemoSerializer(memos, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def UserMemo(request, pk):
    memos = Memo.objects.all().filter(bookId=pk)
    print(memos)
    momo = memos.get(userId=request.user.id)
    print(momo)
    serializer = MemoSerializer(momo, many=False)
    print(serializer.data)
    return Response(serializer.data)



@api_view(['GET'])
def MemoDetail(request, pk):
    memo = Memo.objects.get(memoId=pk)
    serializer = MemoSerializer(memo, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def MemoCreate(request):
    request.data['data']['userId'] = request.user.id
    serializer = request.data['data']
    print(serializer)
    serializer = MemoCreateSerializer(data=serializer)
    if serializer.is_valid():
        serializer.save()
        print("as_save")
    return Response(serializer.data)


@api_view(['PUT'])
def MemoUpdate(request, pk):
    memo = Memo.objects.get(memoId=pk)
    serializer = MemoUpdateSerializer(instance=memo, data=request.data)
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
    else:
        print('false')
    return Response(serializer.data)


@api_view(['DELETE'])
def MemoDelete(request, pk):
    memo = Memo.objects.get(memoId=pk)
    memo.delete()
    return Response('Deleted')
