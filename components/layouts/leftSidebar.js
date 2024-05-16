
export function LeftSideBar(){
    return (
        <>
        <div className="rbt-left-panel popup-dashboardleft-section">
            <div className="rbt-default-sidebar">
              <div className="inner">
                <div className="content-item-content">
                  <div className="rbt-default-sidebar-wrapper">
                    <nav className="mainmenu-nav">
                      
                      <div className="rbt-sm-separator"></div>
                      <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                        <li>
                          <a href="text-generator.html">
                            <img
                              src="/assets/images/generator-icon/text.png"
                              alt="AI Generator"
                            />
                            <span>Text Generator</span>
                          </a>
                        </li>
                        <li>
                          <a href="image-generator.html">
                            <img
                              src="/assets/images/generator-icon/photo.png"
                              alt="AI Generator"
                            />
                            <span>Image Generator</span>
                            <div className="rainbow-badge-card badge-sm ml--10">
                              NEW
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="code-generator.html">
                            <img
                              src="/assets/images/generator-icon/code-editor.png"
                              alt="AI Generator"
                            />
                            <span>Code Generator</span>
                          </a>
                        </li>
                        <li>
                          <a href="image-editor.html">
                            <img
                              src="/assets/images/generator-icon/photo-editor.png"
                              alt="AI Generator"
                            />
                            <span>Image Editor</span>
                          </a>
                        </li>
                        <li>
                          <a href="vedio-generator.html">
                            <img
                              src="/assets/images/generator-icon/video-camera.png"
                              alt="AI Generator"
                            />
                            <span>Vedio Generator</span>
                          </a>
                        </li>
                        <li>
                          <a href="email-generator.html">
                            <img
                              src="/assets/images/generator-icon/email.png"
                              alt="AI Generator"
                            />
                            <span>Email Generator</span>
                          </a>
                        </li>
                        <li>
                          <a
                            tabindex="-1"
                            className="disabled"
                            aria-disabled="true"
                          >
                            <img
                              src="/assets/images/generator-icon/website-design.png"
                              alt="AI Generator"
                            />
                            <span>Website Generator</span>
                            <div className="rainbow-badge-card badge-sm ml--10">
                              PRO
                            </div>
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <div className="rbt-sm-separator"></div>

                  </div>
                </div>
              </div>
              <div className="subscription-box">
                <div className="inner">
                  <a href="profile-details.html" className="autor-info">
                    <div className="author-img active">
                      <img
                        className="w-100"
                        src="/assets/images/team/team-01.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="author-desc">
                      <h6>Trent Adam</h6>
                      <p>trentadam@net</p>
                    </div>
                    <div className="author-badge">Free</div>
                  </a>
                  <div className="btn-part">
                    <a href="pricing.html" className="btn-default btn-border">
                      Upgrade To Pro
                    </a>
                  </div>
                </div>
              </div>
              <p className="subscription-copyright copyright-text text-center b4  small-text">
                © 2023{" "}
                <a href="https://themeforest.net/user/rainbow-themes/portfolio">
                  Rainbow Themes
                </a>
                .
              </p>
            </div>
          </div>
        </>
    )
}