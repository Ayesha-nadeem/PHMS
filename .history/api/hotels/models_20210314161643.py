from django.db import models
import random,string
from django.contrib.auth.models import User
from django.utils.timezone import now
from django.db.models import signals
from .tasks import update_checked_out#
import logging
#from .models import *
#from user_api.celery import app
#from celery import shared_task
#from django.core.mail import send_mail
from django.template.loader import render_to_string

# Create your models here.

class Hotels(models.Model):
    name=models.CharField(max_length=200)
    uname=models.CharField(max_length=200)
    password=models.CharField(max_length=200)
    photo_url=models.ImageField(blank=True,null=True)
    def __str__(self):
        return self.name


class Category(models.Model):
    hotel_id= models.ForeignKey(Hotels, on_delete=models.CASCADE)
    name=models.CharField(max_length=200)
    photo_url=models.ImageField(blank=True,null=True)

    def __str__(self):
        return self.name


class Item(models.Model):
    name=models.CharField(max_length=200)
    description=models.CharField(max_length=200)
    category_id= models.ForeignKey(Category, on_delete=models.CASCADE)
    cover_image=models.ImageField(blank=True,null=True)

    def __str__(self):
        return self.name


class TimeSlot(models.Model):
    hotel_id= models.ForeignKey(Hotels, on_delete=models.CASCADE,default='0')
    start=models.TimeField()
    end=models.TimeField() 
    tables=models.CharField(max_length=200)

    # def __str__(self):
    #     return self.start
class ScheduledRoom(models.Model):
    hotel_id= models.ForeignKey(Hotels, on_delete=models.CASCADE)
    username= models.CharField(max_length=200)
    room_no=models.CharField(max_length=200)
    checkin=models.DateTimeField(default=now)
    checkout=models.DateTimeField(default=now)
    checked_out=models.BooleanField(default=False)
    roomtype=models.CharField(max_length=200,null=True)
    
    def __str__(self):
        return self.room_no

def scheduledRoom_post_saveinstance):

    update_checked_out.apply_async((instance,), eta=instance.checkout)

signals.post_save.connect(scheduledRoom_post_save, sender=ScheduledRoom)

# @shared_task
# def update_checked_out(instance,user):
#     from .serializers import ScheduledRoomSerializer
#    # data = serializers.serialize('json', instance.objects.all())
#     try:
#         # scheduledRoom=ScheduledRoom.objects.update(checked_out=True)
#         # scheduledRoom.save()
#         # w = ScheduledRoom.objects.get(instance.username)
#         # w.checked_out = True
#         # w.save()
#         print("signal")
#         print("signal")

# #gggg
#         # mail_subject = 'Your notification.'
#         # message = render_to_string('notify.html', {
#         #     'title': instance.title,
#         #     'content': instance.content
#         # })
#         # send_mail(mail_subject, message, recipient_list=[instance.user.email], from_email=None)

#     except:
#         logging.warning("Notification does not exist anymore")

class Transactions(models.Model):
    hotel_id= models.ForeignKey(Hotels, on_delete=models.CASCADE)
    username= models.CharField(max_length=200)
    room_no=models.CharField(max_length=200)
    checkin=models.DateTimeField(default=now)
    checkout=models.DateTimeField(default=now)
    checked_out=models.BooleanField(default=False)
    roomtype=models.CharField(max_length=200,null=True)

    def __str__(self):
        return self.room_no

class Room(models.Model):
    hotel_id= models.ForeignKey(Hotels, on_delete=models.CASCADE)
    room_no=models.CharField(max_length=200)
    room_code=models.CharField(max_length=8)
    
    def __str__(self):
        return self.room_no
STATUS=(
    (0,"Complete"),
    (1,"UnComplete")
)
class Orders(models.Model):
    hotel_id= models.ForeignKey(Hotels, on_delete=models.CASCADE)
    room_id=models.ForeignKey(Room,on_delete=models.CASCADE)
    menu_items=models.ManyToManyField(Item)
    time_slot=models.CharField(max_length=200,default=0)
    status=models.IntegerField(choices=STATUS,default=1)

    def __str__(self):
        return self.time_slot

    
