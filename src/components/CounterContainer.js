import {connect} from 'react-redux';

const mapInitialStateToProps = state => ({
    initialState: state 
})

const mapDispatchToProps = dispatch => ({
    incrementAction: () => dispatch({type: "INCREMENT"}),
    decrementAction: () => dispatch({type: "DECREMENT"}),
    incrementByTen: () => dispatch({type: "INCREMENTBY10"}),
    decrementByTen: () => dispatch({type: "DECREMENTBY10"}),
    reset: () => dispatch({type: "RESET"})
})


function CounterContainer({initialState, incrementAction, decrementAction, incrementByTen, decrementByTen, reset}){
    return (
        <div>
            <h1>{initialState}</h1>
            <button onClick={incrementAction} >increment</button>
            <button onClick={decrementAction}>decrement</button>
            <button onClick={incrementByTen}>add 10</button>
            <button onClick={decrementByTen}>remove 10</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default connect(mapInitialStateToProps, mapDispatchToProps)(CounterContainer)