from django.db import models
from user.models import Profile


class Book(models.Model):
    objects = models.Manager()
    bookId = models.AutoField(primary_key=True)
    bookTitle = models.CharField(max_length=250)
    bookWritter = models.CharField(max_length=50, null=True)
    bookIntro = models.TextField(null=True)
    bookLike = models.IntegerField(default=0)
    bookPublisher = models.CharField(max_length=50, null=True)
    bookImg = models.CharField(max_length=250, null=True)
    bookSubscribe = models.IntegerField(default=0)
    userId = models.ForeignKey(Profile, on_delete=models.CASCADE)


class BookArticle(models.Model):
    objects = models.Manager()
    articleId = models.AutoField(primary_key=True)
    articleTitle = models.CharField(max_length=250)
    articleContent = models.TextField()
    articleImg = models.CharField(max_length=250, null=True)
    articleDate = models.DateTimeField(auto_now=True)
    articleViews = models.IntegerField(default=0)
    bookId = models.ForeignKey(Book, on_delete=models.CASCADE)


class Bookmark(models.Model):
    objects = models.Manager()
    bookmarkId = models.AutoField(primary_key=True)
    userId = models.ForeignKey(Profile, on_delete=models.CASCADE)
    bookId = models.ForeignKey(Book, on_delete=models.CASCADE)
    articleId = models.ForeignKey(BookArticle, on_delete=models.CASCADE)


class SignBook(models.Model):
    objects = models.Manager()
    bookId = models.ForeignKey(Book, on_delete=models.CASCADE)
    userId = models.ForeignKey(Profile, on_delete=models.CASCADE)
