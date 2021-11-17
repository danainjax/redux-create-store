function createStore(reducer) {
  let state

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return state
  }

  return {
    dispatch,
    getState,
  }
}

function reducer(state = { menu: 'tacos' }, action) {
  switch (action.type) {
    case 'INCREASE_MENU':
      return { menu: state.menu + ' , more tacos, &' }

    default:
      return state
  }
}

function render() {
  let container = document.getElementById('container')
  container.textContent = store.getState().menu
}

let store = createStore(reducer) // createStore takes the reducer as an argument
store.dispatch({ type: '@@INIT' })
let button = document.getElementById('button')

button.addEventListener('click', () => {
  store.dispatch({ type: 'INCREASE_MENU' })
})
