import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigator from './routes/Navigator';

export function App() {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
};