
export function RightSideBar(){
    return (
        <>
         <div className="rbt-right-side-panel popup-dashboardright-section">
                <div className="right-side-top">
                  <a
                    className="btn-default bg-solid-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#newchatModal"
                  >
                    <span className="icon">
                      <i className="feather-plus-circle"></i>
                    </span>
                    <span>New Chat</span>
                  </a>
                </div>
                <div className="right-side-bottom">
                  <div className="small-search search-section mb--20">
                    <input type="search" placeholder="Search Here..." />
                    <i className="feather-search"></i>
                  </div>

                  <div className="chat-history-section">
                    <h6 className="title">Today</h6>
                    <ul className="chat-history-list">
                      <li className="history-box active">
                        ChatenAI Defination
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Your last Question
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Business Shortcurt Methode
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Best way to maintain code Quality
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="chat-history-section has-show-more">
                    <h6 className="title">Yesterday</h6>
                    <ul className="chat-history-list has-show-more-inner-content">
                      <li className="history-box">
                        How to write a code
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Form Html CSS JS
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        HTML Shortcurt Methode
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Best way to maintain code Quality
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        ChatenAI Defination
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Your last Question
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Unique Shortcurt Methode
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Generate a circle Image
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className="rbt-show-more-btn">Show More</div>
                  </div>

                  <div className="chat-history-section has-show-more">
                    <h6 className="title">Previous 7 days</h6>
                    <ul className="chat-history-list has-show-more-inner-content">
                      <li className="history-box">
                        User Assistant Request
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Funtion Js
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Generate a Image
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Best way to maintain code Quality
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        ChatenAI Defination
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Your last Question
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Business Shortcurt Methode
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Best way to maintain Remote Team
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className="rbt-show-more-btn">Show More</div>
                  </div>

                  <div className="chat-history-section mb--100 has-show-more">
                    <h6 className="title">November</h6>
                    <ul className="chat-history-list has-show-more-inner-content">
                      <li className="history-box">
                        AI writing: Free Trial
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Your last Question
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Education Shortcurt Methode
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        1992 Environment Policy
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Senior UX/UI Design
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Your last Question
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Dark Mode Html CSS JS
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="history-box">
                        Best way to maintain code Quality
                        <div className="dropdown history-box-dropdown">
                          <button
                            type="button"
                            className="more-info-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="feather-more-horizontal"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-refresh-cw"></i>{" "}
                                Regenerate
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-tag"></i> Pin Chat
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-file-text"></i> Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="feather-share-2"></i> Share
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item delete-item" href="#">
                                <i className="feather-trash-2"></i> Delete Chat
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className="rbt-show-more-btn">Show More</div>
                  </div>
                </div>
              </div>
        </>
    )
}