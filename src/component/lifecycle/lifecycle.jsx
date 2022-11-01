import { Component } from 'react'

class Lifecycle extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }

        console.log('constructed');

    }

    componentDidMount() {
        console.log("componentDidMount");

    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count !== this.state.count) {
            return true
        } else {
            return false
        }
    }

    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("Cobarthtrhrthrthtrhrthrthrth");
        return (
            <div className='container mt-5'>
                <button className='mx-auto btn btn-primary' onClick={this.add}>
                    Aku dipencet sebanyak: {this.state.count} kali
                </button>
            </div>
        )
    }
}

export default Lifecycle