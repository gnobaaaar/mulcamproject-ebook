from django.urls import path
from . import api

urlpatterns = [
    path('', api.QnAList, name="QnAList"),
    path('mylist/<str:pk>/', api.QnAMyList, name="QnAMyList"),
    path('detail/<str:pk>/', api.QnADetail, name="QnADetail"),
    path('create/', api.QnACreate, name="QnACreate"),
    path('update/<str:pk>/', api.QnAUpdate, name='QnAUpdate'),
    path('delete/<str:pk>/', api.QnADelete, name='QnADelete'),

    path('reply/<str:pk>/', api.ReplyList, name="ReplyList"),
    path('reply/detail/<str:pk>/', api.ReplyDetail, name="ReplyDetail"),
    path('reply/create/', api.ReplyCreate, name="ReplyCreate"),
    path('reply/update/<str:pk>/', api.ReplyUpdate, name='ReplyUpdate'),
    path('reply/delete/<str:pk>/', api.ReplyDelete, name='ReplyDelete'),
]