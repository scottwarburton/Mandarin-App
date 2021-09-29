import axios from 'axios'
import React from 'react'

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordList: []
        }
    }
    componentDidMount() {
        this.refreshList();
    }
    refreshList = () => {
        axios
            .get("saved_words/")
            .then((res) => this.setState({ wordList: res.data }))
            .catch((err) => console.log(err));
    };
    /*
    renderItems() {
      
        return (this.state.wordList.map((item) => (
            <li key={item}>
                <span>{item.content}</span>
                <button>Delete</button>
            </li>
        )))
    }
    */
    render() {
        return (
            <div>
                <h3>saved</h3>
                <div>
                    {this.state.wordList}
                </div>
                <h3>end saved</h3>
            </div>
        )
    }

}

export default Saved
