
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
                                <div className="mainmenu-nav d-none d-lg-block one-menu">
                                    <ul className="mainmenu one-menu-item">
                                        <li className="with-megamenu has-menu-child-item position-relative menu-item-open">
                                            <a className="header-round-btn" href="#">
                                                <span><i className="feather-grid"></i></span>
                                            </a>
                                            <div className="rainbow-megamenu with-mega-item-2 right-align">
                                                <div className="wrapper">
                                                    <div className="row row--0">
                                                        <div className="col-lg-4 single-mega-item">
                                                            <div className="genarator-section">
                                                                <ul className="genarator-card-group full-width-list">
                                                                    <li>
                                                                        <a href="text-generator.html" className="genarator-card bg-flashlight-static center-align">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/text_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Text Generator</h5>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="vedio-generator.html" className="genarator-card center-align bg-flashlight-static">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/video-camera_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Vedio Generator</h5>
                                                                                </div>
                                                                            </div>
                                                                            <span className="rainbow-badge-card">Hot</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="code-generator.html" className="genarator-card center-align bg-flashlight-static">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/code-editor_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">HTML Generator</h5>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="genarator-card center-align bg-flashlight-static disabled" tabindex="-1">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/lyrics_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Lyrics Generator</h5>
                                                                                </div>
                                                                            </div>
                                                                            <span className="rainbow-badge-card">Comming</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 single-mega-item">
                                                            <div className="genarator-section">
                                                                <ul className="genarator-card-group full-width-list">
                                                                    <li>
                                                                        <a href="image-editor.html" className="genarator-card center-align bg-flashlight-static">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/photo-editor_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Photo Editor</h5>
                                                                                </div>
                                                                            </div>
                                                                            <span className="rainbow-badge-card">Hot</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="image-generator.html" className="genarator-card center-align bg-flashlight-static">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/photo_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Image Generator</h5>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="text-generator.html" className="genarator-card center-align bg-flashlight-static">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/voice_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Speech to text</h5>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="genarator-card center-align bg-flashlight-static disabled" tabindex="-1">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/website-design_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Website Generator</h5>
                                                                                </div>
                                                                            </div>
                                                                            <span className="rainbow-badge-card">Comming</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 single-mega-item">
                                                            <div className="genarator-section">
                                                                <ul className="genarator-card-group full-width-list">
                                                                    <li>
                                                                        <a href="code-generator.html" className="genarator-card center-align bg-flashlight-static">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/code-editor_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Code Generator</h5>
                                                                                </div>
                                                                            </div>
                                                                            <span className="rainbow-badge-card">Hot</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="email-generator.html" className="genarator-card center-align bg-flashlight-static">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/email_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Email Writer</h5>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="text-generator.html" className="genarator-card center-align bg-flashlight-static">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/text-voice_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Text to speech</h5>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="text-generator.html" className="genarator-card center-align bg-flashlight-static disabled center-align" tabindex="-1">
                                                                            <div className="inner bottom-flashlight">
                                                                                <div className="left-align">
                                                                                    <div className="img-bar">
                                                                                        <img src="/assets/images/generator-icon/document_line.png" alt="AI Generator" />
                                                                                    </div>
                                                                                    <h5 className="title">Chat with Documents</h5>
                                                                                </div>
                                                                            </div>
                                                                            <span className="rainbow-badge-card">Comming</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- End Tools Area --> */}

                                {/* <!-- Start admin Area  --> */}
                                <div className="account-access rbt-user-wrapper right-align-dropdown">
                                    <div className="rbt-user ml--0">
                                        <a className="admin-img" href="#"><img src="/assets/images/team/team-01.jpg" alt="Admin" /></a>
                                    </div>
                                    <div className="rbt-user-menu-list-wrapper">
                                        <div className="inner">
                                            <div className="rbt-admin-profile">
                                                <div className="admin-thumbnail">
                                                    <img src="/assets/images/team/team-01.jpg" alt="User Images" />
                                                </div>
                                                <div className="admin-info">
                                                    <span className="name">Trent Adam</span>
                                                    <a className="rbt-btn-link color-primary" href="profile-details.html">View Profile</a>
                                                </div>
                                            </div>
                                            <ul className="user-list-wrapper user-nav">
                                                <li>
                                                    <a href="profile-details.html">
                                                        <i className="feather-user"></i>
                                                        <span>Profile Details</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="notification.html">
                                                        <i className="feather-shopping-bag"></i>
                                                        <span>Notification</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="chat-export.html">
                                                        <i className="feather-users"></i>
                                                        <span>Chat Export</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="appearance.html">
                                                        <i className="feather-home"></i>
                                                        <span>Apperance</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="plans-billing.html">
                                                        <i className="feather-briefcase"></i>
                                                        <span>Plans and Billing</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sessions.html">
                                                        <i className="feather-users"></i>
                                                        <span>Sessions</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="application.html">
                                                        <i className="feather-list"></i>
                                                        <span>Application</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <hr className="mt--10 mb--10" />
                                            <ul className="user-list-wrapper user-nav">
                                                <li>
                                                    <a href="#">
                                                        <i className="feather-help-circle"></i>
                                                        <span>Help Center</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="profile-details.html">
                                                        <i className="feather-settings"></i>
                                                        <span>Settings</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <hr className="mt--10 mb--10" />
                                            <ul className="user-list-wrapper">
                                                <li>
                                                    <a href="signin.html">
                                                        <i className="feather-log-out"></i>
                                                        <span>Logout</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
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
                                <img className="logo-light" src="/assets/images/logo/logo.png" alt="Corporate Logo" />
                                <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                            </a>
                        </div>
                        <div className="close-menu">
                            <button className="close-button">
                                <i className="feather-x"></i>
                            </button>
                        </div>
                    </div>

                    <div className="content">
                        <ul className="mainmenu">
                            <li><a href="dashboard.html">Welcome</a></li>
                            <li className="with-megamenu has-menu-child-item position-relative"><a href="#">Dashboard</a>
                                <div className="rainbow-megamenu right-align with-mega-item-2">
                                    <div className="wrapper p-0">
                                        <div className="row row--0">
                                            <div className="col-lg-6 single-mega-item">
                                                <h3 className="rbt-short-title">DASHBOARD PAGES</h3>
                                                <ul className="mega-menu-item">
                                                    <li>
                                                        <a href="profile-details.html">
                                                            <span>Profile</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="notification.html">
                                                            <span>Notification</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="chat-export.html">
                                                            <span>Chat Export</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="appearance.html">
                                                            <span>Apperance</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="plans-billing.html">
                                                            <span>Plans and Billing</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="sessions.html">
                                                            <span>Sessions</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="application.html">
                                                            <span>Application</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="release-notes.html">
                                                            <span>Release notes</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="help.html">
                                                            <span>Help & FAQs</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 single-mega-item">
                                                <div className="header-menu-img">
                                                    <img src="/assets/images/menu-img/menu-img-2.png" alt="Menu Split Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="signin.html">Sign In</a></li>
                        </ul>








                        <div className="rbt-sm-separator"></div>
                        <div className="rbt-default-sidebar-wrapper">
                            <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                    <li><a href="dashboard.html"><i className="feather-monitor"></i><span>Welcome</span></a></li>
                                    <li><a href="plans-billing.html"><i className="feather-briefcase"></i><span>Manage Subsription</span></a></li>
                                </ul>
                                <div className="rbt-sm-separator"></div>
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                    <li><a href="text-generator.html"><img src="/assets/images/generator-icon/text.png" alt="AI Generator" /><span>Text Generator</span></a></li>
                                    <li><a href="image-generator.html"><img src="/assets/images/generator-icon/photo.png" alt="AI Generator" /><span>Image Generator</span>
                                            <div className="rainbow-badge-card badge-sm ml--10">Hot</div>
                                        </a></li>
                                    <li><a href="code-generator.html"><img src="/assets/images/generator-icon/code-editor.png" alt="AI Generator" /><span>Code Generator</span></a></li>
                                    <li><a href="image-editor.html"><img src="/assets/images/generator-icon/photo-editor.png" alt="AI Generator" /><span>Image Editor</span></a></li>
                                    <li><a href="vedio-generator.html"><img src="/assets/images/generator-icon/video-camera.png" alt="AI Generator" /><span>Vedio Generator</span></a></li>
                                    <li><a href="email-generator.html"><img src="/assets/images/generator-icon/email.png" alt="AI Generator" /><span>Email Generator</span></a></li>
                                    <li><a tabindex="-1" className="disabled" aria-disabled="true" role="button"><img src="/assets/images/generator-icon/website-design.png" alt="AI Generator" /><span>Website Generator</span></a></li>
                                </ul>
                            </nav>

                            <div className="rbt-sm-separator"></div>

                            <nav className="mainmenu-nav">
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                    <li className="has-submenu"><a className="collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseExampleMenu" role="button" aria-expanded="false" aria-controls="collapseExampleMenu"><i className="feather-plus-circle"></i><span>Setting</span></a>
                                        <div className="collapse" id="collapseExampleMenu">
                                            <ul className="submenu rbt-default-sidebar-list">
                                                <li>
                                                    <a href="profile-details.html">
                                                        <i className="feather-user"></i>
                                                        <span>Profile Details</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="notification.html">
                                                        <i className="feather-shopping-bag"></i>
                                                        <span>Notification</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="chat-export.html">
                                                        <i className="feather-users"></i>
                                                        <span>Chat Export</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="appearance.html">
                                                        <i className="feather-home"></i>
                                                        <span>Apperance</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="plans-billing.html">
                                                        <i className="feather-briefcase"></i>
                                                        <span>Plans and Billing</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="sessions.html">
                                                        <i className="feather-users"></i>
                                                        <span>Sessions</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="application.html">
                                                        <i className="feather-list"></i>
                                                        <span>Application</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#"><i className="feather-award"></i><span>Help & FAQ</span></a></li>
                                </ul>
                                <div className="rbt-sm-separator"></div>
                                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                    <li><a href="release-notes.html"><i className="feather-bell"></i><span>Release notes</span></a></li>
                                    <li><a href="terms-policy.html"><i className="feather-briefcase"></i><span>Terms & Policy</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* <!-- Start Header Btn  --> */}
                    <div className="header-btn d-block d-md-none">
                        <a className="btn-default @@btnclassName" target="_blank" href="text-generator.html">Get Started Free</a>
                    </div>
                    {/* <!-- End Header Btn  --> */}
                </div>
            </div>
        </>
    )
}