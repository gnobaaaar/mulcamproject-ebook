from django.db import models
from user.models import Profile
from book.models import Book, BookArticle


# Create your models here.

class QnA(models.Model):
    objects = models.Manager()
    qnaId = models.AutoField(primary_key=True)
    qnaTitle = models.CharField(max_length=250)
    qnaContent = models.TextField()
    qnaImg = models.CharField(max_length=250, null=True)
    bookId = models.ForeignKey(Book, on_delete=models.CASCADE)
    userId = models.ForeignKey(Profile, on_delete=models.CASCADE)


class QnA_Reply(models.Model):
    objects = models.Manager()
    replyId = models.AutoField(primary_key=True)
    replyContent = models.TextField()
    qnaId = models.ForeignKey(QnA, on_delete=models.CASCADE)
    userId = models.ForeignKey(Profile, on_delete=models.CASCADE)
