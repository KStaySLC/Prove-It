import React from "react";
import Header from "../components/header";
import '../static/layout.css'

const Layout = (props) => {
    return (
        <>
            <Header />
            <div className="children">{props.children}</div>
        </>
    )
}

export default Layout