import React from 'react'
import { Provider } from "react-redux";
import { store } from "Store"
import { AppCounter } from 'Component';


const App = () => {
  return (
    <Provider store={store}>
      <AppCounter />
    </Provider>
  )
}

export default App
