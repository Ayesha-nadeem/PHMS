from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
from django.http import HttpResponse
from .forms import *
from django.contrib.auth.models import User,auth
from django.http import JsonResponse
from django.contrib import messages
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core import serializers

# class ScheduledRoomList(APIView):
#     """
#     List all snippets, or create a new snippet.
#     """
#     def get(self, request, format=None):
#         snippets = ScheduledRoom.objects.all()
#         serializer = ScheduledRoomSerializer(ScheduledRoom, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = ScheduledRoomSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# Create your views here.

class HotelsView(viewsets.ModelViewSet):
    queryset=Hotels.objects.all()
    serializer_class=HotelsSerializer

    
class CategoryView(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer


class ItemView(viewsets.ModelViewSet):
    queryset=Item.objects.all()
    serializer_class=ItemSerializer

class TimeSlotView(viewsets.ModelViewSet):
    queryset=TimeSlot.objects.all()
    serializer_class=TimeSlotSerializer

class OrdersView(viewsets.ModelViewSet):
    queryset=Orders.objects.all()
    serializer_class=OrdersSerializer


class RoomView(viewsets.ModelViewSet):
    queryset=Room.objects.all()
    serializer_class=RoomSerializer

class ScheduledRoomView(viewsets.ModelViewSet):
    queryset=ScheduledRoom.objects.all()
    serializer_class=ScheduledRoomSerializer

class TransactionsView(viewsets.ModelViewSet):
    queryset=Transactions.objects.all()
    serializer_class=TransactionsSerializer
# class ScheduledRoom(APIView):
#     """
#     Retrieve, update or delete a snippet instance.
#     """
#     def get_object(self, pk):
#         try:
#             return ScheduledRoom.objects.get(pk=pk)
#         except ScheduledRoom.DoesNotExist:
#             raise Http404

#     def get(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         serializer = ScheduledRoomSerializer(snippet)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         serializer = ScheduledRoomSerializer(snippet, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         snippet.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
 
# class ScheduledRoomView(viewsets.ModelViewSet):
#     queryset=ScheduledRoom.objects.all()
#     data = serializers.serialize('json', queryset)
#     serializer_class=ScheduledRoomSerializer   

def login(request):
    if request.method== 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username,password=password)

        if user is not None:
            auth.login(request, user)
            return JsonResponse({'valid':True})
        else:
            #messages.info(request,'invalid credentials')
            return JsonResponse({'valid':False})

def register(request):

    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        email = request.POST['email']

        if password1==password2:
            if User.objects.filter(username=username).exists():
               #messages.info(request,'Username Taken')
                return JsonResponse({'valid':False,'exist':True})
            elif User.objects.filter(email=email).exists():
                #messages.info(request,'Email Taken')
                return JsonResponse({'valid':False,'exist':True})
            else:   
                user = User.objects.create_user(username=username, password=password1, email=email,first_name=first_name,last_name=last_name)
                user.save()
                
                print('user created')
                return JsonResponse({'valid':True,'exist':False})

        else:
            #messages.info(request,'password not matching..')    
            return JsonResponse({'valid':False,'exist':False})
def scheduleRoom(request):

    if request.method == 'POST':
        hotel_id=request.POST['hotel_id']
        amount=request.POST['amount']
        hotel_name=request.POST['hotel_name']
        room_type=request.POST['room_type']
        user=request.POST['username']
        checkin=request.POST['checkin']
        checkout=request.POST['checkout']
        checked_out=False
        if ScheduledRoom.objects.filter(hotel_id_id=hotel_id,roomtype=room_type,username=user).exists():
            return JsonResponse({'booked':False})
        else:
            scheduleRoom=ScheduledRoom.objects.create(hotel_id_id=hotel_id,username=user,amount=amount,hotel_name=hotel_name,checkin=checkin,checkout=checkout,checked_out=checked_out,roomtype=room_type)
            scheduleRoom.save()
            transactions=Transactions.objects.create(hotel_id_id=hotel_id,username=user,amount=amount,hotel_name=hotel_name,checkin=checkin,checkout=checkout,checked_out=checked_out,roomtype=room_type)
            transactions.save()
            return JsonResponse({'booked':True})
    return JsonResponse({'booked':False})
    
#http://127.0.0.1:8000/scheduledRoom?hotel_id=7&username=a&room_no=66&checkin=2021-03-12T09:29:31Z&checkout=2021-03-12T09:29:31Z&checked_out=false
#http://127.0.0.1:8000/scheduledRoom?hotel_id=7&username=a&amount=66&hotel_name=Pearl%20Continental&room_type=dulex&&checkin=2021-03-12T09:29:31Z&checkout=2021-03-12T09:29:31Z&checked_out=false
def logout(request):
    auth.logout(request)
    return JsonResponse({'valid':True})

def home(request):
    selected_opt = 0
    if(request.user.is_superuser):
        if(request.POST):
            selected_opt = request.POST['hotel_id']
            # return HttpResponse(request.POST['hotel_id'])
            if(request.POST['hotel_id'] == '0'):
                orders = Orders.objects.all()
                hotels = Hotels.objects.all()

                incomplete_orders = Orders.objects.filter(status=1)
                complete_orders = Orders.objects.filter(status=0)

                total_orders = orders.count()
                total_hotels = hotels.count()
                incomplete_orders_count = incomplete_orders.count()
                complete_orders = complete_orders.count()
            else:
                hotels = Hotels.objects.all()
                hotel = Hotels.objects.filter(id = request.POST['hotel_id'])
                orders = Orders.objects.filter(hotel_id=hotel[0].id)
                incomplete_orders = Orders.objects.filter(status=1).filter(hotel_id=hotel[0].id)
                complete_orders = Orders.objects.filter(status=0).filter(hotel_id=hotel[0].id)

                total_orders = orders.count()
                total_hotels = hotels.count()
                incomplete_orders_count = incomplete_orders.count()
                complete_orders = complete_orders.count()
        else:
            orders = Orders.objects.all()
            hotels = Hotels.objects.all()

            incomplete_orders = Orders.objects.filter(status=1)
            complete_orders = Orders.objects.filter(status=0)

            total_orders = orders.count()
            total_hotels = hotels.count()
            incomplete_orders_count = incomplete_orders.count()
            complete_orders = complete_orders.count()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        orders = Orders.objects.filter(hotel_id=hotels[0].id)
        incomplete_orders = Orders.objects.filter(status=1).filter(hotel_id=hotels[0].id)
        complete_orders = Orders.objects.filter(status=0).filter(hotel_id=hotels[0].id)

        total_orders = orders.count()
        total_hotels = hotels.count()
        incomplete_orders_count = incomplete_orders.count()
        complete_orders = complete_orders.count()
    return render(request,"admin/index.html", {'total_orders':total_orders,'total_hotels':total_hotels,'incomplete_orders_count':incomplete_orders_count,'complete_orders':complete_orders,'orders':orders,'hotels':hotels,'selected_opt':selected_opt})

def createHotels(request):  
    return render(request,"admin/create_hotels.html")

def saveHotels(request):  
    form = HotelsForm(request.POST)
    # return HttpResponse(request.POST['uname'])  
    if form.is_valid():  
            try:  
                form.save()
                if not User.objects.filter(username=request.POST['uname']).exists():
                    user = User.objects.create_user(request.POST['uname'],)
                    user.set_password(request.POST['password'])
                    # Update fields and then save again
                    user.is_superuser = False
                    user.is_staff=True 
                    user.save()  
                hotels = Hotels.objects.all()  
                return render(request,"admin/show_hotels.html",{'hotels':hotels})  
            except:  
                pass  
    return render(request,"admin/create_hotels.html")

def editHotels(request,id):  
    hotels = Hotels.objects.get(id=id)
    return render(request,"admin/edit_hotels.html",{'hotels':hotels})

def updateHotels(request,id):  
    hotels = Hotels.objects.get(id=id)

    form = HotelsForm(request.POST, instance = hotels)
    # User.objects.filter(username=request.POST['uname']).delete()
    if form.is_valid():  
            try:
                if not User.objects.filter(username=request.POST['uname']).exists():
                    user = User.objects.create_user(request.POST['uname'],)
                    user.set_password(request.POST['password'])
                    # Update fields and then save again
                    user.is_superuser = False
                    user.is_staff=True 
                    user.save() 
                form.save()  
                # hotels = Hotels.objects.all()
                if(request.user.is_superuser):    
                    hotels = Hotels.objects.all() 
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)  
                return render(request,"admin/show_hotels.html",{'hotels':hotels})  
            except:  
                pass  
    return render(request,"admin/edit_hotels.html",{'hotels':hotels})

def deleteHotels(request, id):  
    hotels = Hotels.objects.get(id=id)
    hotels.delete()  
    if(request.user.is_superuser):    
        hotels = Hotels.objects.all() 
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)  
    return render(request,"admin/show_hotels.html",{'hotels':hotels}) 

def showHotels(request): 
    # hotels = Hotels.objects.all() 
    superUser = False
    if(request.user.is_superuser):    
        hotels = Hotels.objects.all() 
        superUser = True 
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
    # return HttpResponse(request.user)

    return render(request,"admin/show_hotels.html",{'hotels':hotels})

def createCategory(request):
    # return HttpResponse(request.user)
    superUser = False
    if(request.user.is_superuser):    
        hotels = Hotels.objects.all()
        superUser = True 
    else:
        hotels = Hotels.objects.get(uname = request.user.username) 
    print(superUser)
    return render(request,"admin/create_category.html",{'hotels':hotels, 'superUser':superUser})

def saveCategory(request):  
    form = CategoryForm1(request.POST)
    # return HttpResponse(form)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    category = Category.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    category = Category.objects.filter(hotel_id=hotels[0].id)
                return render(request,"admin/show_category.html",{'category':category})   
            except:  
                pass  
    return render(request,"admin/create_category.html")

def editCategory(request,id):  
    category = Category.objects.get(id=id)
    if(request.user.is_superuser):    
        hotels = Hotels.objects.all()
        superUser = True 
    else:
        hotels = Hotels.objects.filter(uname = request.user.username) 

    return render(request,"admin/edit_category.html",{'category':category,'hotels':hotels})

def updateCategory(request,id):  
    category = Category.objects.get(id=id)
    hotels = Hotels.objects.all()

    form = CategoryForm1(request.POST, instance = category)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    category = Category.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    category = Category.objects.filter(hotel_id=hotels[0].id)
                return render(request,"admin/show_category.html",{'category':category})  
            except:  
                pass  
    return render(request,"admin/edit_category.html",{'category':category,'hotels':hotels})
    

def deleteCategory(request, id):  
    category = Category.objects.get(id=id)
    category.delete()  
    if(request.user.is_superuser):    
        category = Category.objects.all()
        superUser = True 
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        category = Category.objects.filter(hotel_id=hotels[0].id)  
    return render(request,"admin/show_category.html",{'category':category})

def showCategory(request):  
    # category = Category.objects.all()
    superUser = False
    if(request.user.is_superuser):    
        category = Category.objects.all()
        superUser = True 
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        category = Category.objects.filter(hotel_id=hotels[0].id)
        

    return render(request,"admin/show_category.html",{'category':category})

def createItem(request):  
    # category = Category.objects.all() 
    if(request.user.is_superuser):    
        category = Category.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        category = Category.objects.filter(hotel_id=hotels[0].id)
    return render(request,"admin/create_item.html",{'category':category})

def saveItem(request):  
    form = ItemForm1(request.POST)
    # return HttpResponse(form)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    items = Item.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    category = Category.objects.filter(hotel_id=hotels[0].id).values_list('id', flat=False)
                    items = Item.objects.filter(category_id__in=category)
                return render(request,"admin/show_item.html",{'items':items})  
            except:  
                pass  
    return render(request,"admin/create_item.html")

def editItem(request,id):  
    items = Item.objects.get(id=id)
    if(request.user.is_superuser):    
        category = Category.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        category = Category.objects.filter(hotel_id=hotels[0].id)

    return render(request,"admin/edit_item.html",{'items':items,'category':category})

def updateItem(request,id):  
    items = Item.objects.get(id=id)
    # hotels = Hotels.objects.all()

    form = ItemForm1(request.POST, instance = items)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    items = Item.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    category = Category.objects.filter(hotel_id=hotels[0].id).values_list('id', flat=False)
                    items = Item.objects.filter(category_id__in=category)
                return render(request,"admin/show_item.html",{'items':items})  
            except:  
                pass  
    return render(request,"admin/edit_item.html",{'items':items,'hotels':hotels})
    

def deleteItem(request, id):  
    item = Item.objects.get(id=id)
    item.delete()  
    if(request.user.is_superuser):    
        items = Item.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        category = Category.objects.filter(hotel_id=hotels[0].id).values_list('id', flat=False)
        items = Item.objects.filter(category_id__in=category) 
    return render(request,"admin/show_item.html",{'items':items})

def showItem(request):  
    items = Item.objects.all()
    if(request.user.is_superuser):    
        items = Item.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        category = Category.objects.filter(hotel_id=hotels[0].id).values_list('id', flat=False)
        items = Item.objects.filter(category_id__in=category)
    return render(request,"admin/show_item.html",{'items':items})

def createOrder(request):  
    hotels = Hotels.objects.all() 
    rooms = Room.objects.all() 
    items = Item.objects.all() 

    if(request.user.is_superuser):    
        hotels = Hotels.objects.all() 
        rooms = Room.objects.all() 
        items = Item.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        rooms = Room.objects.filter(hotel_id=hotels[0].id) 
        category = Category.objects.filter(hotel_id=hotels[0].id).values_list('id', flat=False)
        items = Item.objects.filter(category_id__in=category)

    return render(request,"admin/create_orders.html",{'rooms':rooms,'hotels':hotels,'items':items})

def saveOrder(request):  
    form = OrderForm1(request.POST)
    # return HttpResponse(form)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    orders = Orders.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    orders = Orders.objects.filter(hotel_id=hotels[0].id) 
                return render(request,"admin/show_orders.html",{'orders':orders}) 
            except:  
                pass  
    hotels = Hotels.objects.all() 
    rooms = Room.objects.all() 
    items = Item.objects.all() 

    return render(request,"admin/create_orders.html",{'rooms':rooms,'hotels':hotels,'items':items})

def editOrder(request,id):  
    # if(request.user.is_superuser):    
    #     hotels = Hotels.objects.all() 
    #     rooms = Room.objects.all() 
    #     items = Item.objects.all()
    # else:
    #     hotels = Hotels.objects.filter(uname = request.user.username)
    #     rooms = Room.objects.filter(hotel_id=hotels[0].id) 
    #     category = Category.objects.filter(hotel_id=hotels[0].id).values_list('id', flat=False)
    #     items = Item.objects.filter(category_id__in=category)
    # orders = Orders.objects.get(id=id)

    # return render(request,"admin/edit_orders.html",{'rooms':rooms,'hotels':hotels,'items':items,'orders':orders})
    Orders.objects.filter(id=id).update(status=0)
    if(request.user.is_superuser):    
        orders = Orders.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        orders = Orders.objects.filter(hotel_id=hotels[0].id) 
    return render(request,"admin/show_orders.html",{'orders':orders})

def updateOrder(request,id):  
    orders = Orders.objects.get(id=id)
    # hotels = Hotels.objects.all()

    form = OrderForm1(request.POST, instance = orders)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    orders = Orders.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    orders = Orders.objects.filter(hotel_id=hotels[0].id) 
                return render(request,"admin/show_orders.html",{'orders':orders})  
            except:  
                pass  
    hotels = Hotels.objects.all() 
    rooms = Room.objects.all() 
    items = Item.objects.all()
    return render(request,"admin/edit_orders.html",{'rooms':rooms,'hotels':hotels,'items':items,'orders':orders})
    

def deleteOrder(request, id):  
    orders = Orders.objects.get(id=id)
    orders.delete()  
    if(request.user.is_superuser):    
        orders = Orders.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        orders = Orders.objects.filter(hotel_id=hotels[0].id)     
    return render(request,"admin/show_orders.html",{'orders':orders})

def showOrder(request):  
    # orders = Orders.objects.all()
    if(request.user.is_superuser):    
        orders = Orders.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        orders = Orders.objects.filter(hotel_id=hotels[0].id) 
    return render(request,"admin/show_orders.html",{'orders':orders})

def createRoom(request):  
    # hotels = Hotels.objects.all()
    if(request.user.is_superuser):    
        hotels = Hotels.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username) 

    return render(request,"admin/create_room.html",{'hotels':hotels})

def saveRoom(request):  
    form = RoomForm1(request.POST)
    # return HttpResponse(form)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    rooms = Room.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    rooms = Room.objects.filter(hotel_id=hotels[0].id)     
                return render(request,"admin/show_room.html",{'rooms':rooms})  
            except:  
                pass  
    hotels = Hotels.objects.all() 

    return render(request,"admin/create_room.html",{'hotels':hotels})

def editRoom(request,id):  
    if(request.user.is_superuser):    
        hotels = Hotels.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username) 
    rooms = Room.objects.get(id=id)

    return render(request,"admin/edit_room.html",{'rooms':rooms,'hotels':hotels})

def updateRoom(request,id):  
    rooms = Room.objects.get(id=id)
    # hotels = Hotels.objects.all()

    form = RoomForm1(request.POST, instance = rooms)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    rooms = Room.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    rooms = Room.objects.filter(hotel_id=hotels[0].id)     
                return render(request,"admin/show_room.html",{'rooms':rooms})
            except:  
                pass  
    hotels = Hotels.objects.all() 

    return render(request,"admin/edit_room.html",{'rooms':rooms,'hotels':hotels})
    

def deleteRoom(request, id):  
    rooms = Room.objects.get(id=id)
    rooms.delete()  
    if(request.user.is_superuser):    
        rooms = Room.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        rooms = Room.objects.filter(hotel_id=hotels[0].id)      
    return render(request,"admin/show_room.html",{'rooms':rooms})

def showRoom(request):  
    # rooms = Room.objects.all() 
    if(request.user.is_superuser):    
        rooms = Room.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        rooms = Room.objects.filter(hotel_id=hotels[0].id)     
    return render(request,"admin/show_room.html",{'rooms':rooms})

def createTimeSlot(request):  
    # hotels = Hotels.objects.all()
    if(request.user.is_superuser):    
        hotels = Hotels.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username) 

    return render(request,"admin/create_timeslot.html",{'hotels':hotels})

def saveTimeSlot(request):  
    form = TimeSlotForm1(request.POST)
    # return HttpResponse(form)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    timeSlot = TimeSlot.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    timeSlot = TimeSlot.objects.filter(hotel_id=hotels[0].id)     
                return render(request,"admin/show_timeslot.html",{'timeSlot':timeSlot}) 
            except:  
                pass  
    hotels = Hotels.objects.all() 

    return render(request,"admin/create_timeslot.html",{'hotels':hotels})

def editTimeSlot(request,id):  
    if(request.user.is_superuser):    
        hotels = Hotels.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username) 
    timeSlot = TimeSlot.objects.get(id=id)

    return render(request,"admin/edit_timeslot.html",{'timeSlot':timeSlot,'hotels':hotels})

def updateTimeSlot(request,id):  
    timeSlot = TimeSlot.objects.get(id=id)
    # hotels = Hotels.objects.all()

    form = TimeSlotForm1(request.POST, instance = timeSlot)
    if form.is_valid():  
            try:  
                form.save()  
                if(request.user.is_superuser):    
                    timeSlot = TimeSlot.objects.all()
                else:
                    hotels = Hotels.objects.filter(uname = request.user.username)
                    timeSlot = TimeSlot.objects.filter(hotel_id=hotels[0].id)     
                return render(request,"admin/show_timeslot.html",{'timeSlot':timeSlot})
            except:  
                pass  
    hotels = Hotels.objects.all() 

    return render(request,"admin/edit_timeslot.html",{'timeSlot':timeSlot,'hotels':hotels})
    

def deleteTimeSlot(request, id):  
    timeSlot = TimeSlot.objects.get(id=id)
    timeSlot.delete()  
    if(request.user.is_superuser):    
        timeSlot = TimeSlot.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        timeSlot = TimeSlot.objects.filter(hotel_id=hotels[0].id)      
    return render(request,"admin/show_timeslot.html",{'timeSlot':timeSlot})

def showTimeSlot(request):  
    # timeSlot = TimeSlot.objects.all()
    if(request.user.is_superuser):    
        timeSlot = TimeSlot.objects.all()
    else:
        hotels = Hotels.objects.filter(uname = request.user.username)
        timeSlot = TimeSlot.objects.filter(hotel_id=hotels[0].id)     
    return render(request,"admin/show_timeslot.html",{'timeSlot':timeSlot})

def notifications(request):  
    # orders = Orders.objects.all()
    hotels = Hotels.objects.filter(uname = request.user.username)
    orders = Orders.objects.filter(hotel_id=hotels[0].id).order_by('-id')
    total_orders = orders.count()

    response_data = {}
    response_data['count'] = total_orders
    response_data['room'] = orders[0].room_id.room_no

    return JsonResponse(response_data)

    

