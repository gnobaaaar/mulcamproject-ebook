from django.urls import path
from . import api

urlpatterns = [
    path('', api.MemoList, name="MemoList"),
    path('myMemo/<str:pk>/', api.UserMemo, name="UserMemo"),
    path('detail/<str:pk>/', api.MemoDetail, name="MemoDetail"),
    path('create/', api.MemoCreate, name="MemoCreate"),
    path('update/<str:pk>/', api.MemoUpdate, name='MemoUpdate'),
    path('delete/<str:pk>/', api.MemoDelete, name='MemoDelete'),


]