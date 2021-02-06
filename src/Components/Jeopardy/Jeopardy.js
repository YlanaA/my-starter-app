import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from "../../pages/jeopardy/JeopardyDisplay";



class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        answer: "",
      }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData }
    console.log(formData)
    console.log(event.target)
    console.log(event.target.name)
    formData[event.target.name] = event.target.value
    this.setState({
      formData
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handle submit')
    if (this.state.formData.answer === this.state.data.answer) {
      console.log('match')
      this.setState((state, props) => ({
        score: state.score + state.data.value,
        formData: {
          answer: ""
        }
      }))
    } else {
      console.log('noMatch')
    }

    this.getNewQuestion();
  }



  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    console.log(this.state.data);
    let category = this.state.data.category && this.state.data.category.title;
    return (
      <JeopardyDisplay
        question={this.state.data.question}
        category={category}
        value={this.state.data.value}
        score={this.setState.score}
        userAnswer={this.state.userAnswer}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )

  }
}


  export default Jeopardy;
