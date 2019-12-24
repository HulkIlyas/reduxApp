import React from 'react'
import { Provider } from "react-redux";
import {AppCounter} from 'Component'
import {store} from "Store"



const App = () => {
  return (
    <Provider store={store}>
      <AppCounter />
    </Provider>
  )
}

export default App
