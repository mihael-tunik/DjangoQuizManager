import axios from 'axios';
const API_URL = process.env.REACT_APP_API_SERVER //'http://localhost:8080';

export default class QuizzesService{
	
    constructor(){
        console.log('API_URL: ', API_URL)   
    }
	
    getQuizzes() {
        const url = `${API_URL}/api/quizzes/`;
        return axios.get(url).then(response => response.data);
    }  
    
    getQuizzesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    
    getQuiz(pk) {
        const url = `${API_URL}/api/quizzes/${pk}`;
        //console.log('URL: ', url)
        return axios.get(url).then(response => response.data);
    }
    
    deleteQuiz(quiz){
        const url = `${API_URL}/api/quizzes/${quiz.pk}`;
        return axios.delete(url);
    }
    
    createQuiz(quiz){
        const url = `${API_URL}/api/quizzes/`;
        return axios.post(url, quiz);
    }
    
    updateQuiz(quiz){
	const url = `${API_URL}/api/quizzes/${quiz.pk}`;
	return axios.put(url, quiz);
    }
}
