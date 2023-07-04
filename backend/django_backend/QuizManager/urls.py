from django.contrib import admin
from django.urls import path, re_path, include

from Quizzes import views
#from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('AuthJWT.api.urls')),
    path('api/quizzes/', views.quiz_list, name="quiz-list"),
    re_path(r'^api/quizzes/$', views.quiz_list),
    re_path(r'^api/quizzes/(?P<pk>[0-9]+)$', views.quizzes_detail),
]
