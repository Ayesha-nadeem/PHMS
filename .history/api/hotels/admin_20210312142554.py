from django.contrib import admin
from .forms import *
# Register your models here.
from .models import *
from django.contrib.auth.models import Group,User

admin.site.register(Hotels)
admin.site.register(Orders)
admin.site.register(Category)
admin.site.register(TimeSlot)
admin.site.register(Room)

admin.site.register(ScheduledRoom)


# class HotelsAdmin(admin.ModelAdmin):
#     # form = CategoryForm
#     list_display=("name",)
#     # list_filter=("status",)
#     search_fields=["name"]
#     # prepopulated_fields={"slug":("title",)}
#     def save_model(self, request, obj, form, change):
#         if not User.objects.filter(username=obj.uname).exists():
#             user = User.objects.create_user(obj.uname,)
#             user.set_password(obj.password)
#             # Update fields and then save again
#             user.first_name = obj.name
#             user.is_staff=True 
#             user.save()
#             my_group = Group.objects.get(name='Hotels') 
#             user.groups.add(my_group)
#           #  my_group.user_set.add(user)
#             obj.user = request.user
#         else:
#             User.objects.filter(username=obj.uname)
#             user.first_name = obj.name
#             user.is_staff=True 
#             user.save()
#             my_group = Group.objects.get(name='Hotels') 
#             my_group.user_set.add(user)
#             obj.user = request.user

#         obj.save()



# admin.site.register(Hotels,HotelsAdmin)
# class OrderAdmin(admin.ModelAdmin):
#     form = OrderForm
#     list_display=("time_slot","status")
#     list_filter=("status",)
#     # search_fields=["title","content"]
#     # prepopulated_fields={"slug":("title",)}
#     def get_form(self, request,*args, **kwargs):
#          form = super(OrderAdmin, self).get_form(request, *args,**kwargs)
#          form.current_user = request.user
#          print(form.current_user," apple")
#          return form
#     def get_queryset(self, request):
#         qs = super(OrderAdmin, self).get_queryset(request)
#         print(qs.filter(hotel_id=request.user.id),"Order")
#         id=Hotels.objects.filter(uname=request.user.username).values_list('id', flat=True).first()
#         print(id)
#         return qs.filter(hotel_id=id)

# admin.site.register(Orders,OrderAdmin)


# class CategoryAdmin(admin.ModelAdmin):
#     form = CategoryForm
#     list_display=("name","hotel_id")
#     # list_filter=("status",)
#     search_fields=["name","hotel_id"]
#     # prepopulated_fields={"slug":("title",)}
#     def get_form(self, request,*args, **kwargs):
#          form = super(CategoryAdmin, self).get_form(request, *args,**kwargs)
#          form.current_user = request.user
#          print(form.current_user," apple")
#          return form
#     def get_queryset(self, request):
#         qs = super(CategoryAdmin, self).get_queryset(request)
#         print(qs.filter(hotel_id=request.user.id),"category")
#         return qs.filter(hotel_id=request.user.id)

# admin.site.register(Category,CategoryAdmin)
# # admin.site.register(Category)
# class ItemAdmin(admin.ModelAdmin):
#     form = ItemForm
#     list_display=("name",)
#     # list_filter=("status",)
#     search_fields=["name"]
#     # prepopulated_fields={"slug":("title",)}
#     def get_form(self, request,*args, **kwargs):
#          form = super(ItemAdmin, self).get_form(request, *args,**kwargs)
#          form.current_user = request.user
#          return form
#     def get_queryset(self, request):
#         qs = super(ItemAdmin, self).get_queryset(request)
#         ca = Category.objects.filter(hotel_id=request.user.id).values_list('id', flat=True).first()
#         return qs.filter(category_id=ca)
# admin.site.register(Item,ItemAdmin)
# class TimeSlotAdmin(admin.ModelAdmin):
#     form = timeSlotForm
#     list_display=("start","end")
#     # list_filter=("status",)
#     search_fields=["start","end"]
#     def get_form(self, request,*args, **kwargs):
#          form = super(TimeSlotAdmin, self).get_form(request, *args,**kwargs)
#          form.current_user = request.user
#          print(form.current_user," apple")
#          return form
#     def get_queryset(self, request):
#         qs = super(TimeSlotAdmin, self).get_queryset(request)
#         print(qs.filter(hotel_id=request.user.id),"category")
#         return qs.filter(hotel_id=request.user.id)
# admin.site.register(TimeSlot,TimeSlotAdmin)


# class RoomAdmin(admin.ModelAdmin):
#     form = RoomForm
#     list_display=("room_no","room_code")
#     # list_filter=("status",)
#     search_fields=["room_no","room_code"]
#     # prepopulated_fields={"slug":("title",)}
#     def get_form(self, request,*args, **kwargs):
#          form = super(RoomAdmin, self).get_form(request, *args,**kwargs)
#          form.current_user = request.user
#          return form
#     def get_queryset(self, request):
#         qs = super(RoomAdmin, self).get_queryset(request)
#         id=Hotels.objects.filter(uname=request.user.username).values_list('id', flat=True).first()
#         # print(uname)
#         print(qs.filter(hotel_id=id),"room")
#         # ca = Category.objects.filter(hotel_id=request.user.id).values_list('id', flat=True).first()
#         print(qs.filter(hotel_id=id))

#         return qs.filter(hotel_id=request.user.id)
# admin.site.register(Room,RoomAdmin)
