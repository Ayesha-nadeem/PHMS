from .models import * 
from django.contrib.auth.models import User
from django import forms
import random,string

class CategoryForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
         super(CategoryForm, self).__init__(*args, **kwargs)
         self.fields['hotel_id'].queryset = Hotels.objects.filter(uname=self.current_user.username)
        #  print(self.current_user.id,self.current_user.first_name)


    name = forms.CharField(label="name")
    # photo_url = forms.CharField(label="Photo Url")
    hotel_id = forms.ModelChoiceField(label='Hotel Name',required=True,queryset=Hotels.objects.all(),empty_label="Select an hotel name")

    class Meta:
        model = Category
        fields = '__all__'

class timeSlotForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
         super(timeSlotForm, self).__init__(*args, **kwargs)
         self.fields['hotel_id'].queryset = Hotels.objects.filter(uname=self.current_user.username)

    start=forms.TimeField()
    end=forms.TimeField() 
    tables=forms.CharField(label="tables")
    hotel_id = forms.ModelChoiceField(label='Hotel Name',required=True,queryset=Hotels.objects.all(),empty_label="Select an hotel name")

    class Meta:
        model = TimeSlot
        fields = ('hotel_id','start','end','tables')


class ItemForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
         super(ItemForm, self).__init__(*args, **kwargs)
         hotel = Hotels.objects.filter(uname=self.current_user.username).values_list('id', flat=True).first()
        #  print(hotel[0])
        #  print(Category.objects.filter(hotel_id_id=hotel[0]))
        #  UserParent.objects.filter(user_id__in=Subquery(users.values('id')))
        #  print(Category.objects.filter())
         self.fields['category_id'].queryset = Category.objects.filter(hotel_id_id=hotel)

    name = forms.CharField(label="name")
    description = forms.CharField(label="Description")
    category_id = forms.ModelChoiceField(label='Category',required=True,queryset=Category.objects.all(),empty_label="Select category")
    cover_image=  forms.ImageField()

    class Meta:
        model = Item
        fields = ('name','description','category_id','cover_image')
        
class RoomForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
         super(RoomForm, self).__init__(*args, **kwargs)
         hotel = Hotels.objects.filter(id=self.current_user.id).values_list('id', flat=True).first()
        #  print(self.current_user.first_name,"banana",hotel[0])
        #  UserParent.objects.filter(user_id__in=Subquery(users.values('id')))
        #  print(Category.objects.filter())
         self.fields['hotel_id'].queryset = Hotels.objects.filter(id=hotel)
         chars='abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
         length=8
         number=1
         for p in range(number):
             password=''
             for p in range(length):
                 password+=random.choice(chars)
         print(password)
         self.fields['room_code'].initial = password        
        


    hotel_id = forms.ModelChoiceField(label='Hotel Name',required=True,queryset=Hotels.objects.all(),empty_label="Select an hotel name")
    room_no=forms.CharField(label="room no.")
    room_code=forms.CharField(label="room code",initial='')

    class Meta:
        model = Room
        fields = ('hotel_id','room_no','room_code',)

class OrderForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
         super(OrderForm, self).__init__(*args, **kwargs)
         print(self.current_user.id)
         hotel = Hotels.objects.filter(id=self.current_user.id).values_list('id', flat=True).first()
         print(hotel,"banana")
        #  UserParent.objects.filter(user_id__in=Subquery(users.values('id')))
        #  print(Category.objects.filter())
         self.fields['hotel_id'].queryset = Hotels.objects.filter(id=hotel)
         self.fields['room_id'].queryset = Room.objects.filter(hotel_id=hotel)
       
        


    hotel_id = forms.ModelChoiceField(label='Hotel Name',required=True,queryset=Hotels.objects.all(),empty_label="Select an hotel name")
    room_id = forms.ModelChoiceField(label='Room',required=True,queryset=Room.objects.all(),empty_label="Select Room")
    
    # room_id=models.ForeignKey(Room,on_delete=models.CASCADE)

    class Meta:
        model = Orders
        fields = '__all__'
        # fields = ('hotel_id','room_id',)

class HotelsForm(forms.ModelForm):  
    class Meta:  
        model = Hotels  
        fields = "__all__" 

class CategoryForm1(forms.ModelForm):  
    class Meta:  
        model = Category  
        fields = "__all__"

class ItemForm1(forms.ModelForm):  
    class Meta:  
        model = Item  
        fields = "__all__"

class OrderForm1(forms.ModelForm):  
    class Meta:  
        model = Orders  
        fields = "__all__"

class RoomForm1(forms.ModelForm):  
    class Meta:  
        model = Room  
        fields = "__all__"

class TimeSlotForm1(forms.ModelForm):  
    class Meta:  
        model = TimeSlot  
        fields = "__all__"

