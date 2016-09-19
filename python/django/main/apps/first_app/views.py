from django.shortcuts import render

# Create your views here.
def index(request):
    print ("hi"*100)
    return render(request, "first_app/index.html")
