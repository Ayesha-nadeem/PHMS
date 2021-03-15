from django.db import models
import random,string
from django.contrib.auth.models import User
from django.utils.timezone import now

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

def ScheduledRoom_post_save(instance, *args, **kwargs):
    update_checked_out.apply_async((instance,), eta=instance.checkout)


signals.post_save.connect(ScheduledRoom_post_save, sender=ScheduledRoom)

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

    
