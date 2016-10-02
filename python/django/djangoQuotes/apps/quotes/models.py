from __future__ import unicode_literals
from django.core.exceptions import ObjectDoesNotExist
from django.db import models

class UserManager(models.Manager):
    def validateUser(self, request):
        errors = self.validate_input(request)
        if len(errors) > 0:
            return(False, errors)
        user = self.create(name=request.POST['name'], alias=request.POST['alias'], email=request.POST['email'], password=request.POST['password'])
        return (True, user)
    def validate_input(self, request):
        errors = []
        if len(request.POST['name']) < 3:
            errors.append("Please include a name greater than 2 characters")
        if len(request.POST['alias']) < 3:
            errors.append("Please have a minimum of 6 characters for alias")
        if len(request.POST['email']) < 3:
            errors.append("Please include a valid email")
        if len(request.POST['password']) < 4:
            errors.append("please have a minimum of 4 characters for your password")
        if request.POST['password'] != request.POST['confirm_pw']:
            errors.append("passwords do not match!")
        return errors
    def validatelogin(self,request):
        errors = []
        if len(request.POST['email']) < 1:
            errors.append('email cannot be blank!!')
        if len(request.POST['password']) < 4:
            errors.append(['Please enter a valid password'])
        if len(errors) > 0:
            return(False, errors)
        else:
            try:
                user = Users.objects.get(email= request.POST['email'])
                print user
                if request.POST['password'] == user.password:
                    print('match!')
                    return(True, user)
                else:
                    print('no match')
                    errors.append('incorrect password')
            except ObjectDoesNotExist:
                    errors.append('no registry found')
        if len(errors) > 0:
            return (False, errors)
            print result

class QuoteManager(models.Manager):
    def validatequote(self, request):
        errors = []
        if len(request.POST['quote_by']) == 0:
            errors.append('Hey add something you noob!')
        if len(request.POST['quote_by']) < 3:
            errors.append('minimum of 3 characters for quote please!')
        if len(request.POST['message']) == 0:
            errors.append('add a message please!')
        if len(request.POST['message']) < 10:
            errors.append('minimum of 10 characters for message please!')
            return(False, errors)
        else:
            quote = self.create(quote_by=request.POST['quote_by'], message=request.POST['message'], made_by=Users.objects.get(id=request.session['id']) )
            return(True, quote)
# Create your models here.
class Users(models.Model):
    name = models.CharField(max_length=100)
    alias = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Quotes(models.Model):
    made_by = models.ForeignKey(Users)
    quote_by = models.CharField(max_length=100)
    message = models.CharField(max_length=100)
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now=True)
    objects = QuoteManager()

class MyQuotes(models.Model):
    user = models.ForeignKey(Users)
    quote = models.ForeignKey(Quotes)
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now=True)
