import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../static/layout.css'

const Layout = (props) => {
    return (
        <>
            <Header />
            <div className="children">{props.children}</div>
            <Footer />
        </>
    )
}

export default Layout