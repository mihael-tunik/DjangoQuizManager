import React, { Component } from  'react';
import QuizzesService from './QuizzesService';

const quizzesService = new QuizzesService();

class QuizzesList extends Component {

constructor(props) {
    super(props);
    
    this.state  = {
        quizzes: [],
        nextPageURL:  ''
    };
    this.nextPage = this.nextPage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
}

componentDidMount() {
    var self = this;
    quizzesService.getQuizzes().then(function (result) {
        console.log(result);
        self.setState({quizzes: result.data, nextPageURL: result.nextlink})
    });
}

handleDelete(e, pk){
    var self = this;

    quizzesService.deleteQuiz({pk : pk}).then(()=>{
		
        var newArr = self.state.quizzes.filter(function(obj) {
            return obj.pk !== pk;
        });
        	
        self.setState({quizzes: newArr})
    });
}

nextPage(){
    var self = this;
    console.log(this.state.nextPageURL);		

    quizzesService.getQuizzesByURL(this.state.nextPageURL).then((result) => {
        self.setState({ quizzes:  result.data, nextPageURL:  result.nextlink})
    });
}

render() {

    return (
        <div  className="quizzes--list">
            <table  className="table">
                <thead  key="thead">
                    <tr>
                        <th>#</th>
                        <th>Quiz name</th>
                        <th>Description</th>
                        <th>Play link</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                
                <tbody>
                
                    {this.state.quizzes.map( c  =>
                        <tr  key={c.pk}>
				<td>{c.pk}  </td>
				<td>{c.quiz_name}</td>
				<td>{c.description}</td>
				<td><a  href={"/play/" + c.pk} > Play </a></td>
				<td><a  href={"/quiz/" + c.pk}> Update </a></td>
				<td><button  onClick={(e)=>  this.handleDelete(e, c.pk) }> Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        
        </div>
    );

}
  
}
export default QuizzesList;


