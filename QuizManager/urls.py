from django.contrib import admin
from django.urls import path

from Quizzes import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/quizzes/$', views.quiz_list),
    url(r'^api/quizzes/(?P<pk>[0-9]+)$', views.quizzes_detail),
]
