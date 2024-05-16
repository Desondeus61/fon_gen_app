export default function BotMessage({response,prompt,image,loading=true}){


    return (
        <>
          <div className="chat-box ai-speech bg-flashlight">
                      <div className="inner top-flashlight leftside light-xl">
                        <div className="chat-section generate-section">
                          <div className="author">
                            <i className="feather-check-circle"></i>
                          </div>
                          <div className="chat-content">
                            <h6 className="title color-text-off mb--0">
                              Scanning the data...
                            </h6>
                          </div>
                        </div>
                        {loading ? (<div className="chat-section generate-section">
                          <div className="author">
                            <img
                              src="/assets/images/icons/loader-one.gif"
                              alt="Loader Images"
                            />
                          </div>
                          <div className="chat-content">
                            <h6 className="title color-text-off mb--0">
                              Generating answers for you…
                            </h6>
                          </div>
                        </div>) : (
                          <div className="chat-section generate-details-section">
                          <div className="author">
                            <img
                              className="w-100"
                              src="/assets/images/team/avater.png"
                              alt="BlayAi"
                            />
                          </div>
                          <div className="chat-content">

                            <div className="image-caption mb--20">
                              <h5 className="caption-title theme-gradient">
                                {prompt}
                              </h5>
                            </div>
                            <div className="img-box-grp mb--20">
                              <div className="img-box">
                                <img
                                  className="w-100 radius"
                                  src="/assets/images/generator-img/photo-7.png"
                                  alt="Image Generation"
                                />
                                <button className="download-btn btn-default btn-small bg-solid-primary">
                                  <i className="feather-download"></i>
                                  <span>Download</span>
                                </button>
                              </div>
                              <div className="img-box">
                                <img
                                  className="w-100 radius"
                                  src="/assets/images/generator-img/photo-13.png"
                                  alt="Image Generation"
                                />
                                <button className="download-btn btn-default btn-small bg-solid-primary">
                                  <i className="feather-download"></i>
                                  <span>Download</span>
                                </button>
                              </div>
                            </div>
                            <div className="reaction-section">
                              <div className="btn-grp">
                                <div className="left-side-btn dropup">
                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#likeModal"
                                    className="react-btn btn-default btn-small btn-border"
                                  >
                                    <i className="feather-thumbs-up"></i>
                                  </button>
                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#dislikeModal"
                                    className="react-btn btn-default btn-small btn-border"
                                  >
                                    <i className="feather-thumbs-down"></i>
                                  </button>
                                  <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#shareModal"
                                    className="react-btn btn-default btn-small btn-border"
                                  >
                                    <i className="feather-share"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="react-btn btn-default btn-small btn-border dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="feather-more-vertical"></i>
                                  </button>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        <i className="feather-copy"></i> Copy
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        <i className="feather-tag"></i> Pin Chat
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        <i className="feather-file-text"></i>{" "}
                                        Rename
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item delete-item"
                                        href="#"
                                      >
                                        <i className="feather-trash-2"></i>{" "}
                                        Delete Chat
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="right-side-btn">
                                  <button className="react-btn btn-default btn-small btn-border">
                                    <i className="feather-repeat"></i>
                                    <span>Regenerate</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        )}
                        
                        
                      </div>
                    </div>
        </>
    )
}