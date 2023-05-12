import axios from 'axios'
const API_URL = process.env.REACT_APP_API_SERVER

export default class QuizzesService {
  constructor () {
  }

  getQuizzes () {
    const url = `${API_URL}/api/quizzes/`
    return axios.get(url).then(response => response.data)
  }

  getQuizzesByURL (link) {
    const url = `${API_URL}${link}`
    return axios.get(url).then(response => response.data)
  }

  getQuiz (pk) {
    const url = `${API_URL}/api/quizzes/${pk}`
    return axios.get(url).then(response => response.data)
  }

  deleteQuiz (quiz) {
    const url = `${API_URL}/api/quizzes/${quiz.pk}`
    return axios.delete(url)
  }

  createQuiz (quiz) {
    const url = `${API_URL}/api/quizzes/`
    return axios.post(url, quiz)
  }

  updateQuiz (quiz) {
    const url = `${API_URL}/api/quizzes/${quiz.pk}`
    return axios.put(url, quiz)
  }
}
