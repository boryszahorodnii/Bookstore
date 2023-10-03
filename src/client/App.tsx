import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Main from "./pages/Main";
import { store } from './store/store';
import './index.css'

const App = () => (
    <Provider store={store}>
      <Main />
    </Provider>
)

export default App;
