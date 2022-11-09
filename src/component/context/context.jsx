import { Component, createContext } from "react"

export const MyContext = createContext();

//HOC Provider
const MyProvider = MyContext.Provider

const MyProviderHOC = (Children) => {
    return (

        class MyProviderComp extends Component {

            state = {
                power: 1,
                nama: "DJ Kodar"
            }
            action = (action) => {
                if (action.type === 'MINUS') {
                    this.setState({
                        power: this.state.power - 1
                    })
                } else {
                    if (action.type === 'PLUS') {
                        this.setState({
                            power: this.state.power + 1
                        })
                    }
                }
            }
            render() {
                return (
                    <MyProvider value={
                        {
                            state: this.state,
                            action: this.action
                        }
                    } >




                        <Children {...this.props} />
                    </MyProvider>
                )
            }
        }
    )

}

export default MyProviderHOC;

//HOC consumer
const MyConsumer = MyContext.Consumer

const MyConsumerHOC = (Children) => {
    return (
        class MyConsumerComp extends Component {
            render() {
                return (
                    <MyConsumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </MyConsumer>
                )
            }
        }
    )
}
export { MyConsumerHOC }
