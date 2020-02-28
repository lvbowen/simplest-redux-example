import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <h2>redux</h2>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>增加</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// InitState
const initState = {
  count: 0
};

// Reducer
function counter(state = initState, action) {
  switch (action.type) {
    case 'increase':
      const newState = Object.assign({}, state, { count: state.count + 1 });
      return newState;
    default:
      return state;
  }
}

// Action
const increaseAction = { type: 'increase' };

// Store
const store = createStore(counter);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState().count}
    onIncreaseClick={() => store.dispatch(increaseAction)}
  />,
  document.getElementById('root')
)
render()

const unsubscribe = store.subscribe(render); // State 发生变化，就自动执行这个监听函数 subscribe

// unsubscribe();   // 解除监听
