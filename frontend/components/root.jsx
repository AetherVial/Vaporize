import React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";


export const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);