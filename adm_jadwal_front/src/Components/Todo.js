import React, {Component} from 'react';

export default class Todo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            text:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    render () {
        return (
            <div>
                <h2>List Pekerjaan</h2>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        Apa yang akan kamu lakukan?
                    </label>
                    <input id="new-todo" type="text" onChange={this.handleChange} value={this.state.text} />
                    <button>
                        Tambah barang ke {this.state.items.length + 1}
                    </button>            
                </form>
            </div>
        );
    }

    handleChange (e)  {
        this.setState({text: e.target.value});
    }
    
    handleSubmit (e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

}




class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }

}