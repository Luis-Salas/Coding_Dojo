from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^loginlogic$', views.loginlogic),
    url(r'^dashboard$', views.dashboard),
    url(r'^create$', views.create),
    url(r'^add2me/(?P<id>\d+)$', views.add2me),
    url(r'^show/(?P<id>\d+)$', views.show),
    # url(r'^show$', views.show),
]
