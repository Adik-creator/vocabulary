import React from 'react';
import './NotFoundPage.css'
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center">404</h1>
                            </div>
                            <div className="content_box_404 text-center">
                                <h3 className="h2 text-center">
                                    Look like you're lost
                                </h3>
                                <p>Page not found!</p>
                                <Link to='/home' className="link_404">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {NotFoundPage};