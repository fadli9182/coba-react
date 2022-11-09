import { createStore } from "redux";

stateawal ={
    value:0,
    umur:20
}

const ReducerGlobal = (state=stateAwal, action)=>{
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                value:state.value + 1,
                umur: state.umur + 5
            }
            case ' MINUS':
                return{
                    ...state,
                    value:state.value - 1,
                    umur: state.umur - 5
                }
                default:
                    return state
    }
}
    const storage = createStore{ReducerGlobal}


storage.dispatch({type:"ADD"})
console.log('dispatch', storage.getstate());
