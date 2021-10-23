import axios from 'axios'
import React from 'react'
import Table from "./Table";



 

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            englishWords: [],
            mandarinWords: [],
            pinyinWords: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.refreshList();
    }
    async refreshList() {
        let response = await axios
            .get("/api-auth/words/")
            .then((res) => res.data)
            .catch((err) => console.log(err));
        let englishWords = [];
        let mandarinWords = [];
        let pinyinWords = [];
        for (let i = 0; i < response.length; i++) {
            englishWords.push(response[i].englishWord);
            mandarinWords.push(response[i].mandarinWord);
            pinyinWords.push(response[i].pinyinWord);
        }
        this.setState({ 
            englishWords: englishWords,
            mandarinWords: mandarinWords,
            pinyinWords: pinyinWords
        })
    };
    async handleSubmit(e) {
        e.preventDefault();
        await axios
        .post("", {wordToDelete: e.target.wordToDelete.value})
        .then(function (response) {
            console.log(response);
        })
        this.refreshList();
    }

    render() {
        const columns = [
            {
                Header: 'English',
                accessor: 'english',
            },
            {
                Header: 'Mandarin',
                accessor: 'mandarin',
            },
            {
                Header: 'Pinyin',
                accessor: 'pinyin',
            },
            {
                Header: 'Delete',
                accessor: 'delete',
            }
        ]
        const data = [];
        for (let i = 0; i < this.state.englishWords.length; i++) {
            data.push(
                {
                    english: this.state.englishWords[i],
                    mandarin: this.state.mandarinWords[i],
                    pinyin: this.state.pinyinWords[i],
                    delete: <form onSubmit={this.handleSubmit}><button name="wordToDelete" value={this.state.englishWords[i]}>Delete</button></form>
                },
            );
        }
        
        return (
            <div>
                <h3>Saved Words</h3>
                <div>
                    <Table columns={columns} data={data}/>
                </div>
            </div>
        )
    }

}

export default Saved

/*
render() {
        let rows = [];
        for (let i = 0; i < this.state.englishWords.length; i++) {
            rows.push(
                <tr key={i}>
                    <td>{this.state.englishWords[i]}</td>
                    <td>{this.state.mandarinWords[i]}</td>
                    <td>{this.state.pinyinWords[i]}</td>
                    <td>
                        <form onSubmit={this.handleSubmit} >
                            <button name="wordToDelete" value={this.state.englishWords[i]}>Delete</button>
                        </form>
                    </td>
                </tr>
            )
        }
        return (
            <div>
                 <Table columns={columns} data={data}/>

                <h3>Saved Words</h3>
                <div>
                    <table className="blueTable">
                        <thead>
                            <tr>
                                <th>English</th>
                                <th>Mandarin</th>
                                <th>Pinyin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <td colspan="4">
                                    <div className="links">
                                        <a href="#">&laquo;</a>
                                        <a className="active" href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">&raquo;</a>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                        <tbody>  
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
*/