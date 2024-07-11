// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@progress/kendo-theme-default/dist/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/index.css'
// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import './assets/third-party/apex-chart.css';

// project import
import App from './App';
import { store } from './store';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import {TIsProvider } from './TIsContext';
import { AlarmsProvider } from './AlarmsContext';

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ReduxProvider store={store}>
            <BrowserRouter basename="/">
                <AlarmsProvider>
                <TIsProvider>
                <App />
                </TIsProvider>
                </AlarmsProvider>
            </BrowserRouter>
        </ReduxProvider>
    // ,
    // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
