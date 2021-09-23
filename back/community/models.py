from django.db import models
from user.models import Profile


class Communication(models.Model):
    objects = models.Manager()
    communicationId = models.AutoField(primary_key=True)
    communicationTitle = models.CharField(max_length=250)
    communicationContent = models.TextField()
    communicationImg = models.CharField(max_length=250, null=True)
    communicationDate = models.DateTimeField(auto_now=True)
    communicationViews = models.IntegerField(default=0)
    communicationCategory = models.IntegerField()
    userId = models.ForeignKey(Profile, on_delete=models.CASCADE)


class CommunicationComment(models.Model):
    objects = models.Manager()
    commentId = models.AutoField(primary_key=True)
    commentContent = models.TextField()
    communicationId = models.ForeignKey(Communication, on_delete=models.CASCADE)
