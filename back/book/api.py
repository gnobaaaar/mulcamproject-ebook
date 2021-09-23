from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Book, BookArticle, Bookmark, SignBook
from .modelsdto import BookSerializer, Book_ArticleSerializer, BookmarkSerializer, \
    BookProfile, BookUpdateSerializer, Book_ArticleListSerializer, Book_ArticleUpdateSerializer, \
    BookmarkListSerializer, BookSignSerializer, BookIdTitleSerializer, Book_ArticleOriginSerializer, \
    BookCreateSerializer


@api_view(['GET'])
def BookList(request):
    books = Book.objects.all()
    serializer = BookProfile(books, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def MyBookList(request):
    books = Book.objects.all().filter(userId=request.user.id)
    serializer = BookProfile(books, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def BookDetail(request, pk):
    print(request)
    book = Book.objects.get(bookId=pk)
    serializer = BookSerializer(book, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def BookCreate(request):
    request.data['bookMakeList']['userId'] = request.user.id
    request.data['bookMakeList']['bookImg'] = request.data['BookImg']
    serializer = request.data['bookMakeList']
    serializer = BookCreateSerializer(data=serializer)
    if serializer.is_valid():
        serializer.save()
    print("save")

    return Response(serializer.data)


@api_view(['POST'])
def Book_ArticleCreate(request, pk):
    for i in range(len(request.data['data'])):
        serializer = Book_ArticleSerializer(data=request.data['data'][i])
        if serializer.is_valid():
            serializer.save()

    return Response(serializer.data)


@api_view(['PUT'])
def BookUpdate(request, pk):
    book = Book.objects.get(bookId=pk)
    serializer = BookUpdateSerializer(instance=book, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def Book_ArticleOrigin(request):
    bookArticles = BookArticle.objects.all()
    serializer = Book_ArticleOriginSerializer(bookArticles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def Book_ArticleList(request, pk):
    bookArticles = BookArticle.objects.all().filter(bookId=pk)
    serializer = Book_ArticleListSerializer(bookArticles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def Book_ArticleDetail(request, pk):
    bookArticle = BookArticle.objects.get(articleId=pk)
    serializer = Book_ArticleSerializer(bookArticle, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def Book_ArticleUpdate(request, pk):
    bookArticle = BookArticle.objects.get(articleId=pk)
    serializer = Book_ArticleUpdateSerializer(instance=bookArticle, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def BookIdTitle(request):
    book = Book.objects.all().filter(book_title=request)
    serializer = BookIdTitleSerializer(book, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def BookmarkList(request):
    bookmarks = Bookmark.objects.all()
    serializer = BookmarkListSerializer(bookmarks, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def BookmarkDetail(request, pk):
    bookmark = Bookmark.objects.get(bookmark_id=pk)
    serializer = BookmarkSerializer(bookmark, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def BookmarkCreate(request):
    serializer = BookmarkSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['PUT'])
def BookmarkUpdate(request, pk):
    bookmark = Bookmark.objects.get(bookmark_id=pk)
    serializer = BookmarkSerializer(instance=bookmark, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def BookmarkDelete(request, pk):
    bookmark = Bookmark.objects.get(bookmark_id=pk)
    bookmark.delete()
    return Response('Deleted')


@api_view(['GET'])
def SignBookList(request):
    myBooks = Book.objects.select_related('userId').filter(signbook__userId_id=request.user.id)
    print(myBooks.query)
    serializer = BookSignSerializer(myBooks, many=True)
    return Response(serializer.data)
