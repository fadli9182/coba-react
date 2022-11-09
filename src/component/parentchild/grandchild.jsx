import MyConsumerHOC from "../context/context";
import { Component } from "react";
import { MyContext } from "../context/context";



class GrandChild extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    value => {
                        return (
                            <div className="d-flex">
                                <button className="btn btn-primary" onClick={() => { value.action("PLUS")}}>Tambah Power</button>
                                <input className="mx-auto w-50" type="text" readOnly value={() => { value.power() }} />
                                <button className="btn btn-primary" onClick={() => { value.action("MINUS") }}>Kurangi Power</button>
                            </div>
                        )
                    }}

            </MyContext.Consumer >
        )
    }
}

export default MyConsumerHOC(GrandChild)
