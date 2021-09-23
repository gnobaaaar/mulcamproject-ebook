from django.urls import path
from . import api

urlpatterns = [
    path('', api.CommunicationList, name="CommunicationList"),
    path('mycommunitylist/<str:pk>/', api.MyCommunicationList, name="MyCommunicationList"),
    path('detail/<str:pk>/', api.CommunicationDetail, name="CommunicationDetail"),
    path('create/', api.CommunicationCreate, name="CommunicationCreate"),
    path('update/<str:pk>/', api.CommunicationUpdate, name='CommunicationUpdate'),
    path('delete/<str:pk>/', api.CommunicationDelete, name='CommunicationDelete'),

    path('commend/<str:pk>/', api.CommentList, name="CommentList"),
    path('commend/create/', api.CommentCreate, name="CommentCreate"),
    path('commend/update/<str:pk>/', api.CommentUpdate, name='CommentUpdate'),
    path('commend/delete/<str:pk>/', api.CommentDelete, name='CommentDelete'),
]
