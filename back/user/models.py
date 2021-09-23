from django.db import models

# Create your models here.
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_pk = models.IntegerField(blank=True)
    email = models.EmailField(max_length=500, blank=True)
    nickname = models.CharField(max_length=200, default='닉네임을 정해주세요', blank=True)
    photo = models.CharField(max_length=200, default='https://msa-b-4.s3.ap-northeast-2.amazonaws.com/pic/1.jfif', blank=True)
    myInfo = models.CharField(max_length=150, blank=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, user_pk=instance.id)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
