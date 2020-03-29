import React from 'react';

export const Footer = () => {
    return (
        <footer className="page-footer font-small unique-color-dark" style = {stylemainblack}>
            <div style={styleupperblock}>
                <div className="container" >
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="fb-ic">
                                <i className="fab fa-facebook-f white-text mr-4"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>
                            <a className="li-ic">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fab fa-instagram white-text"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">About StockPit</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={stylecontent}/>
                        <p>Here you</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Leagues</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={stylecontent}/>
                            <p>
                                <a href="#!">Daily</a>
                            </p>
                            <p>
                                <a href="#!">Weekly</a>
                            </p>
                            <p>
                                <a href="#!">Monthly</a>
                            </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={stylecontent}/>
                            <p>
                                <a href="#!">Your Account</a>
                            </p>
                            <p>
                                <a href="#!">FAQ</a>
                            </p>
                            <p>
                                <a href="#!">Careers</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={stylecontent}/>
                            <p><i className="fas fa-home mr-3"></i> Mumbai, IN</p>
                            <p><i className="fas fa-envelope mr-3"></i> support@stockpit.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 91 7678337940</p>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="www.stockpit.com"> StockPit : Be the Bull</a>
            </div>
        </footer>
    )
}

var stylecontent = {
    width: '60px'
}

var styleupperblock = {
    background: '#6351ce',
    color: 'white'
}

var stylemainblack = {
    background: 'lavender'
}

