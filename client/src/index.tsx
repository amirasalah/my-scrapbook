import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './components/App'
import { PopupContext } from './context/context'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PopupContext.Provider
                value={{ popUpVisible: false, setPopUpVisible: () => {} }}
            >
                <App />
            </PopupContext.Provider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('react-root'),
)
