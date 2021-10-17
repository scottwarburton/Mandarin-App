import React from 'react'
import QuizBox from "./QuizBox.js"

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStatus: true,
            questions: this.props.questions,
            currentQuestion: 0,
            correct: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.retry = this.retry.bind(this);
    }
    handleClick(selection) {
        if (selection == this.state.questions[this.state.currentQuestion].correct) {
            this.setState({correct: this.state.correct + 1});
        }
        if (this.state.currentQuestion == this.state.questions.length - 1) {
            this.setState({gameStatus: false});
        } else {
            this.setState({currentQuestion: this.state.currentQuestion + 1});
        }
    }
    retry() {
        this.setState({currentQuestion: 0});
        this.setState({correct: 0});
        this.setState({gameStatus: true});
    }
    render() {
        return (
            <div>
                {this.state.gameStatus && 
                    <div>
                        <h3>Question #{this.state.currentQuestion + 1}</h3>
                        <QuizBox handleClick={this.handleClick} questions={this.state.questions[this.state.currentQuestion]}/>
                        <h4>Score {this.state.correct} / {this.state.currentQuestion}</h4>
                    </div>
                }
                {!this.state.gameStatus &&
                    <div>
                        <h3>Final score {this.state.correct} / {this.state.questions.length}</h3>
                        <button onClick={this.retry}>Retry</button>
                    </div>
                }
            </div>
        )
    }
}

export default Quiz
