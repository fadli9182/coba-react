import React, { Component } from "react";
import GrandChild from "./grandchild";

class Child extends Component {
    constructor() {
        super()
        this.state = {
            power: 0
        }
        this.handleMinus = this.handleMinus.bind(this)
    }

    sendPower = () => {
        this.props.handlingPower(this.state.power)
    }

    handleMinus() {
        this.setState(
            { power: this.state.power - 100 },
            () => this.sendPower(this.state.power)
        )
    }

    handlePlus = () => {
        this.setState(
            { power: this.state.power + 100 },
            () => this.sendPower(this.state.power)
        )
    }

    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src="" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Umur Agus</h5>
                    <p className="card-text">umur Agus adalah: {this.state.power} Tahun</p>
                </div>
                <GrandChild minus={this.handleMinus} plus={this.handlePlus} power={this.state.power}/>
            </div>
        )
    }
}

export default Child
