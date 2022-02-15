import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";
import Homepage from "./pages/Homepage";

const App = () => {

    const useStyles = makeStyles(() => ({
        App: {
            backgroundColor: '#14161a',
            color: 'white',
            minHeight: '100vh'
        }
    }));

    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className={classes.App}>
                <Header /> 
                <Route path="/" component={Homepage} exact />
                <Route path="/coins/:id" component={CoinPage} />
            </div>
        </BrowserRouter>
    );
}

export default App;