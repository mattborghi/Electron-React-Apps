import React from 'react';

class Questions extends React.Component {
  state = {
    questions: ["What is this?"]
  };

  addQuestion = question => {
    this.setState(prevState => ({
      questions: [...prevState.questions, question]
    }));
  };

  render() {
    return (
      <div id="questions">
        <ol id="questionsList">
          {this.state.questions.map(question => (
            <li id="oneQuestion" key={question}> {question} </li>
          ))}
        </ol>
        <AddQuestionButton onClick={this.addQuestion} />
      </div>
    );
  }
}


class AddQuestionButton extends React.Component {
  addQuestion = () => {
    this.props.onClick(
      Math.random()
        .toString(36)
        .substring(7) + "?"
    );
  };

  render() {
    return (
      <div id="addQuestionButton">
        <button id="addQuestionButton" onClick={this.addQuestion}>
          Add Question
        </button>
      </div>
    );
  }
}

export default Questions;