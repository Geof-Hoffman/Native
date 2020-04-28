import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//creates redux store by calling ConfigureStore() into store variable
const store = ConfigureStore();

export default function App() {
    return (
        //gives Main Componenent and its children ability to connect to redux store
        <Provider store={store}>
        <Main />
        </Provider>
    );
}