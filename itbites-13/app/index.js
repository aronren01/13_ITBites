import React from "react";
import ReactDOM from 'react-dom/client';

// ???
import './globals.css';

import App from "./App";
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="7557316907-qksboovqfoni4hbdftv3ls3b3cgshb20.apps.googleusercontent.com">
        <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);

reportWebVitals();