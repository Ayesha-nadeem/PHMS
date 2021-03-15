import logging
#from .models import ScheduledRoom
#from user_api.celery import app
from celery import shared_task
from rest_framework.renderers import JSONRenderer
#from django.core.mail import send_mail
from django.template.loader import render_to_string


@shared_task
@csrf_exempt
def update_checked_out(instance):
    from .serializers import ScheduledRoomSerializer
    snippets = instance.objects.all()
    serializer = ScheduledRoomSerializer(snippets)

    try:
        #serializer = ScheduledRoomSerializer(instance)
        # json = JSONRenderer().render(serializer.data)

        # w = instance.objects.get(instance.username)
        # w.checked_out = True
        # w.save()
        # scheduledRoom=ScheduledRoom.objects.update(checked_out=True)
        # scheduledRoom.save()
        print("signal")

        # mail_subject = 'Your notification.'
        # message = render_to_string('notify.html', {
        #     'title': instance.title,
        #     'content': instance.content
        # })
        # send_mail(mail_subject, message, recipient_list=[instance.user.email], from_email=None)

    except:
        logging.warning("Notification does not exist anymore")