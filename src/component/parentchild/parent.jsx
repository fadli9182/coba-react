import { Component } from "react";
import Child from "./child";

class Parent extends Component {

    state = {
        power: "0"
    }

    handlePower = (biji) => {
        this.setState({
            power: biji
        })
        console.log(biji);

        
    }
    render() {
        return(
            <div className="mt-3" >
                <Child handlingPower={this.handlePower} />
                <button className="btn btn-primary text-center mt-5" >Muncul</button>
                <p id="biji" style={{display: 'none'}}>Agus Berumur: {this.state.power} Tahun</p>

            </div>
        )
        // function muncul() {
        //     return document.getElementById('biji').style.display = "none"
        // }
    }
}

export default Parent