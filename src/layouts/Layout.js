import React from "react";
import "./layout.scss";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <section className="layout__section">
                {children}
            </section>
        </div>
    )
}

export default Layout