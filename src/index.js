import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Footer from "./components/Footer";
import GlobalStyle from "./utils/style/GlobalStyle";
import {SurveyProvider, ThemeProvider} from "./utils/context";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
            <SurveyProvider>

                <GlobalStyle/>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/survey/:questionNumber" element={<Survey/>}/>
                    <Route exact path="/results" element={<Results/>}/>
                    <Route exact path="/freelances" element={<Freelances/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </SurveyProvider>


        </ThemeProvider>

    </Router>


</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
