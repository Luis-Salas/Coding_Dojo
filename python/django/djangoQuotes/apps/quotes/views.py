from django.shortcuts import render, redirect
from models import Users, Quotes, MyQuotes
from django.contrib import messages
# Create your views here
def index(request):
    context = {
        'user': Users.objects.all()
    }
    return render(request, 'quotes/index.html', context)

def register(request):
    result = Users.objects.validateUser(request)
    if result[0] == False:
        make_messages(request, result[1])
    return redirect('/')

def make_messages(request, message_list):
    for message in message_list:
        messages.add_message(request, messages.INFO, message)

def loginlogic(request):
    result = Users.objects.validatelogin(request)
    if result[0] == False:
        make_messages(request, result[1])
        return redirect('/')
    else:
        request.session['id'] = result[1].id
        request.session['alias'] = result[1].alias
        return redirect('/dashboard')

def dashboard(request):
    quote_list = Quotes.objects.all()
    userid = MyQuotes.objects.filter(user=request.session['id'])
    print userid.values_list('quote', flat=True)
    exclude = Quotes.objects.all().exclude(id__in=userid.values_list('quote', flat=True))
    print exclude
    context = {
        'myquotes': MyQuotes.objects.filter(user=Users.objects.get(id=request.session['id'])),
        'allquotes': exclude,
    }
    return render(request, 'quotes/dashboard.html', context)

def create(request):
    quote = Quotes.objects.validatequote(request)
    if quote[0] == False:
        make_messages(request, quote[1])
    return redirect('/dashboard')

def add2me(request, id):
    quote = Quotes.objects.get(id=id)
    person = Users.objects.get(id=request.session['id'])
    MyQuotes.objects.create(quote=quote, user=person)
    return redirect('/dashboard')

def show(request, id):
    userquotes = Quotes.objects.filter(made_by=Users.objects.get(id=id))
    user = Users.objects.get(id=id)
    print user.alias
    context = {
        'stuff': userquotes,
        'alias': user.alias,
        'count': len(userquotes)
    }
    return render(request, 'quotes/show.html', context)

def remove(request, id):
    MyQuotes.objects.get(id=id).delete()
    return redirect("/dashboard")
