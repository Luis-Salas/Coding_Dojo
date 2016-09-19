from django.shortcuts import render, HttpResponse
import datetime

# Create your views here.
def index(request):
    now = datetime.datetime.now()
    context= {"time": now}
    return render(request, 'timedisplay/index.html',context)
