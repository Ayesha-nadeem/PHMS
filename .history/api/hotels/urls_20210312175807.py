from django.urls import path,include
from . import views
from rest_framework import routers

router=routers.DefaultRouter()
router.register('Hotels',views.HotelsView,'Hotels')
router.register('Category',views.CategoryView,'Category')
router.register('Item',views.ItemView,'Item')
router.register('TimeSlot',views.TimeSlotView,'TimeSlot')
router.register('Room',views.RoomView,'Room')
router.register('Orders',views.OrdersView,'Orders')
#router.register('sh',views.ScheduledRoomView,'sh')
urlpatterns = [
    
    path('',include(router.urls)),
     path('ScheduledRoom/', views.ScheduledRoom.as_view()),
    path('ScheduledRoom/<int:pk>/', views.ScheduledRoom.as_view()),
    path("register", views.register, name="register"),
    path("scheduledRoom", views.scheduleRoom, name="scheduledRoom"),
    path("login",views.login, name="login"),
    path("logout",views.logout,name="logout"),
    path('admin/home', views.home), 


    path('admin/createHotels', views.createHotels),
    path('admin/saveHotels', views.saveHotels),
    path('admin/editHotels/<int:id>', views.editHotels),
    path('admin/updateHotels/<int:id>', views.updateHotels),
    path('admin/deleteHotels/<int:id>', views.deleteHotels),
    path('admin/hotels', views.showHotels),

    path('admin/createCategory', views.createCategory),
    path('admin/saveCategory', views.saveCategory),
    path('admin/editCategory/<int:id>', views.editCategory),
    path('admin/updateCategory/<int:id>', views.updateCategory),
    path('admin/deleteCategory/<int:id>', views.deleteCategory),
    path('admin/category', views.showCategory),

    path('admin/createItem', views.createItem),
    path('admin/saveItem', views.saveItem),
    path('admin/editItem/<int:id>', views.editItem),
    path('admin/updateItem/<int:id>', views.updateItem),
    path('admin/deleteItem/<int:id>', views.deleteItem),
    path('admin/item', views.showItem),

    path('admin/createOrder', views.createOrder),
    path('admin/saveOrder', views.saveOrder),
    path('admin/editOrder/<int:id>', views.editOrder),
    path('admin/updateOrder/<int:id>', views.updateOrder),
    path('admin/deleteOrder/<int:id>', views.deleteOrder),
    path('admin/order', views.showOrder),

    path('admin/createRoom', views.createRoom),
    path('admin/saveRoom', views.saveRoom),
    path('admin/editRoom/<int:id>', views.editRoom),
    path('admin/updateRoom/<int:id>', views.updateRoom),
    path('admin/deleteRoom/<int:id>', views.deleteRoom),
    path('admin/room', views.showRoom),

    path('admin/createTimeSlot', views.createTimeSlot),
    path('admin/saveTimeSlot', views.saveTimeSlot),
    path('admin/editTimeSlot/<int:id>', views.editTimeSlot),
    path('admin/updateTimeSlot/<int:id>', views.updateTimeSlot),
    path('admin/deleteTimeSlot/<int:id>', views.deleteTimeSlot),
    path('admin/timeSlot', views.showTimeSlot),

    path('admin/checkNotification', views.notifications),
    

]
