from django.db import models

class Quiz(models.Model):
    quiz_name = models.CharField("Quiz name", max_length=255)
    description = models.TextField(blank=True, null=True)
    json_content = models.TextField(blank=True, null=True)
   
    created = models.DateTimeField("Created at", auto_now_add=True)

    def __str__(self):
        return self.quiz_name
