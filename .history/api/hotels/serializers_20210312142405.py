from rest_framework import serializers
from .models import *

class HotelsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hotels
        fields=('id','name','uname','password','photo_url')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        # fields=('id','name','photo_url')
        fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=Item
        # fields=('id','name','description')
        fields = '__all__'

class TimeSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model=TimeSlot
        # fields=('id','name','description')
        fields = '__all__'
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model=Room
        # fields=('id','name','description')
        fields = '__all__'

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model=Orders
        # fields=('id','name','description')
        fields = '__all__'
class ScheduledRoomsSerializer(serializers.ModelSerializer):
    class Meta:
        model=ScheduledRoom
        # fields=('id','name','description')
        fields = '__all__'

