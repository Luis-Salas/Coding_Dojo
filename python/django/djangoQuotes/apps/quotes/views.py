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
    print(result)
    if result[0] == False:
        make_messages(request, result[1])
        return redirect('/')
    return redirect('/')

def make_messages(request, message_list):
    for message in message_list:
        print message
        messages.add_message(request, messages.INFO, message)

def loginlogic(request):
    result = Users.objects.validatelogin(request)
    print(result)
    if result[0] == False:
        make_messages(request, result[1])
        return redirect('/')
    else:
        request.session['id'] = result[1].id
        request.session['alias'] = result[1].alias
        return redirect('/dashboard')

def dashboard(request):
    quote_list = Quotes.objects.all()
    print(quote_list)
    context = {
        'user': request.session['alias'],
        'quote':quote_list,
    }
    return render(request, 'quotes/dashboard.html', context)

def create(request):
    quote = Quotes.objects.validatequote(request)
    print(quote)
    if quote[0] == False:
        make_messages(request, quote[1])
        return redirect('/dashboard')
    else:
        return redirect('/dashboard')

def add2me(request, id):
    add = Quotes.objects.get(id=id)
    person = Users.objects.get(id=request.session['id'])
    var = MyQuotes.objects.create(item=add, added_by=person)
    return redirect('/dashboard')

def show(request, id):
    quote = Quotes.objects.get(id=id)
    userquotes = Quotes.objects.all().filter(made_by=quote)
    context = {
        'stuff': userquotes

    }
    return render(request, 'quotes/show.html')
