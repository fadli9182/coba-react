import { Component } from "react";
import Child from "./child";

class Parent extends Component {

    state = {
        power: "0"
    }

    handlePower = (agus) => {
        this.setState({
            power: agus
        })
        console.log(agus);


    }
    render() {
        return(
            <div className="container d-flex justify-content-center">
            <div className="mt-3" >
                <Child handlingPower={this.handlePower} />
                <p id="agus" style={{display: ''}}>Agus Berumur: {this.state.power} Tahun</p>
            </div>
            </div>
        )
        // function muncul() {
        //     return document.getElementById('biji').style.display = "none"
        // }
    }
}

export default Parent
