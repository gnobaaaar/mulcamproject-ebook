from django.urls import path
from . import api

urlpatterns = [
    path('', api.BookList, name="BookList"),
    path('mybooklist/', api.MyBookList, name="myBookList"),
    path('detail/<str:pk>/', api.BookDetail, name="BookDetail"),
    path('create/', api.BookCreate, name="BookCreate"),
    path('update/<str:pk>/', api.BookUpdate, name='BookUpdate'),

    path('article/', api.Book_ArticleOrigin, name="Book_ArticleList"),
    path('article/<str:pk>/', api.Book_ArticleList, name="Book_ArticleList"),
    path('article/detail/<str:pk>/', api.Book_ArticleDetail, name="Book_ArticleDetail"),
    path('article/create/<str:pk>/', api.Book_ArticleCreate, name="Book_ArticleCreate"),
    path('article/update/<str:pk>/', api.Book_ArticleUpdate, name='Book_ArticleUpdate'),

    path('bookmark/', api.BookmarkList, name="BookmarkList"),
    path('bookmark/detail/<str:pk>/', api.BookmarkDetail, name="BookmarkDetail"),
    path('bookmark/create/', api.BookmarkCreate, name="BookmarkCreate"),
    path('bookmark/update/<str:pk>/', api.BookmarkUpdate, name='BookmarkUpdate'),
    path('bookmark/delete/<str:pk>/', api.BookmarkDelete, name='BookmarkDelete'),

    path('signbook/', api.SignBookList, name='SignBookList'),
]
