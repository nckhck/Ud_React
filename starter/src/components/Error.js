// Script was developed with help of ChatGPT & UdacityGPT
import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <section class="page_404">
            <div class="content_box_404">
                <h2>404</h2>
                <h3>Something went wrong!</h3>
                <p>Page is not available</p>
                <NavLink to="/" class="link_404">
                    Return Home
                </NavLink>
            </div>
            <div class="four_zero_four_bg">
            </div>
        </section>
    );
};

export default Error;