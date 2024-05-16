
export default function Header(){




    return (
        <>
        <header className="rbt-dashboard-header rainbow-header header-default header-left-align rbt-fluid-header">
                <div className="container-fluid position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-6 col-7">
                            <div className="header-left d-flex">
                                <div className="expand-btn-grp">
                                    <button className="bg-solid-primary popup-dashboardleft-btn"><i className="feather-sidebar left"></i></button>
                                </div>
                                <div className="logo">
                                    <a href="/" className="d-flex justify-content-center align-items-center h-100">
                                        <img className="logo-light" src="/assets/images/logo/logoblay_max.png" alt="Corporate Logo"/>
                                        <img className="logo-dark" src="/assets/images/logo/logoblay_max.png" alt="Corporate Logo"/>
                                         
                                        
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-6 col-5">
                            <div className="header-right">
                                <nav className="mainmenu-nav d-none d-lg-block text-center">
                                  







                                </nav>

                                {/* <div className="header-btn d-none d-md-block">
                                    <a className="btn-default btn-small round" target="_blank" href="plans-billing.html">Upgrade <i className="feather-zap"></i></a>
                                </div> */}

                              
                                <div className="mobile-menu-bar mr--10 ml--10 d-block d-lg-none">
                                    <div className="hamberger">
                                        <button className="hamberger-button">
                                            <i className="feather-menu"></i>
                                        </button>
                                    </div>
                                </div>
                                

                                {/* <!-- Start Tools Area --> */}
                                
                                {/* <!-- End Tools Area --> */}

                                {/* <!-- Start admin Area  --> */}
                                <div className="account-access rbt-user-wrapper right-align-dropdown">
                                    <div className="rbt-user ml--0">
                                        <a className="admin-img" href="#"><img src="/assets/images/team/team-01.jpg" alt="Admin" /></a>
                                    </div>
                                </div>
                                {/* <!-- Start admin Area  --> */}

                                <div className="expand-btn-grp @@display-className">
                                    <button className="bg-solid-primary popup-dashboardright-btn"><i className="feather-sidebar right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="popup-mobile-menu">
                <div className="inner-popup">
                    <div className="header-top">
                        <div className="logo">
                            <a href="index.html">
                            <img className="logo-light" src="/assets/images/logo/logoblay_max.png" alt="Corporate Logo"/>
                                        <img className="logo-dark" src="/assets/images/logo/logoblay_max.png" alt="Corporate Logo"/>
                            </a>
                        </div>
                        <div className="close-menu">
                            <button className="close-button">
                                <i className="feather-x"></i>
                            </button>
                        </div>
                    </div>

                    <div className="content">
                        
                    </div>

                    {/* <!-- Start Header Btn  --> */}
                    <div className="header-btn d-block d-md-none">
                        <a className="btn-default @@btnclassName" target="_blank" href="/">Gratuit</a>
                    </div>
                    {/* <!-- End Header Btn  --> */}
                </div>
            </div>
        </>
    )
}