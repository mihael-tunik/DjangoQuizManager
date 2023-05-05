import pytest

from django.urls import reverse

from Quizzes.models import Quiz
from Quizzes.serializers import QuizSerializer

@pytest.mark.django_db
def test_list_quizzes(client):
    url = reverse('quiz-list')
    response = client.get(url)
    assert response.status_code == 200
