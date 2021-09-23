from rest_framework import serializers
from .models import Book, BookArticle, Bookmark, SignBook


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['bookId', 'bookTitle', 'bookWritter', 'bookIntro', 'bookLike', 'bookPublisher',
                  'bookImg', 'bookSubscribe', 'userId']


class Book_ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookArticle
        fields = ['articleId', 'articleTitle', 'articleContent', 'articleImg', 'articleDate', 'articleViews',
                  'bookId']


class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['bookmarkId', 'userId', 'bookId', 'articleId']


class BookProfile(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ('bookId', 'bookTitle', 'bookWritter', 'bookIntro', 'bookImg')


class BookUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['bookId', 'bookTitle', 'bookContent', 'bookWritter', 'bookIntro',
                  'bookPublisher', 'bookImg']


class Book_ArticleOriginSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookArticle
        fields = ['articleId', 'articleTitle', 'bookId', 'articleImg', 'articleDate', 'articleViews']


class Book_ArticleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookArticle
        fields = ['articleId', 'articleTitle', 'articleImg', 'articleDate', 'articleViews']


class Book_ArticleUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookArticle
        fields = ['articleId', 'articleTitle', 'articleContent', 'articleImg']


class BookmarkListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ['bookmarkId', 'bookId', 'articleId']


class BookSignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['bookTitle', 'bookIntro']


class BookCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['bookId', 'bookTitle', 'bookWritter', 'bookPublisher', 'userId','bookImg']


class BookIdTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['book_id']
