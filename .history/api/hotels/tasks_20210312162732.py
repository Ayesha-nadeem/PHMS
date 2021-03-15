import logging
from user_api.celery import app
#from django.core.mail import send_mail
from django.template.loader import render_to_string
from .models import *

@app.task
def update_checked_out(self, instance):
    try:
        scheduledRoom=ScheduledRoom.objects.update(checked_out=True)
        scheduledRoom.save();

        # mail_subject = 'Your notification.'
        # message = render_to_string('notify.html', {
        #     'title': instance.title,
        #     'content': instance.content
        # })
        # send_mail(mail_subject, message, recipient_list=[instance.user.email], from_email=None)

    except:
        logging.warning("Notification does not exist anymore")