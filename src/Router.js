import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import Footer from "./components/Footer";
import Arrow2Top from "./components/Arrow2Top";


const Router = () => {

    return(

        <BrowserRouter>
            <div className="page-container">
                <Header/>
                <div className='body-content'>
                    <Routes>
                        <Route exact path="/" element={<WelcomePage/>}/>
                        <Route path="*" element={
                            <React.Fragment>
                                <h1>Error</h1>
                            </React.Fragment>
                        } />
                    </Routes>
                </div>
                {/* <Arrow2Top/> */}
                <Footer/>
            </div>
        </BrowserRouter>
    )
};
export default Router;