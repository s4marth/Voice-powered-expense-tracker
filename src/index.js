import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="1c3cd13b-9b7d-4d8b-bff9-12eef5587d3a" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
 document.getElementById('root')
 );
