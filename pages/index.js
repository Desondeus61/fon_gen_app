import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/layouts/header";
import PageLoader from "@/components/layouts/loader";
import { LeftSideBar } from "@/components/layouts/leftSidebar";
import UserPrompt from "@/components/chat/UserPrompt";
import BotMessage from "@/components/chat/BotMessage";
import react, { useState } from "react";
import FonKeyBoard from "@/components/clavier/KeyBoard";
import EmptyChat from "@/components/chat/EmptyChat";
import Info from "@/components/chat/Info";
const inter = Inter({ subsets: ["latin"] });

import axios from "axios";
import FormData from "form-data";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [discussions, setDiscussions] = useState([]);




// Fonction pour générer et récupérer une image à partir de l'API
const generateImageFromPrompt = async (prompt) => {
  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("output_format", "jpeg");

  try {
    const response = await axios.post(
      "https://api.stability.ai/v2beta/stable-image/generate/core",
      formData,
      {
        headers: {
          Authorization: `Bearer sk-8X8TBCUcbiIsWGshYpYyBSFWkBxKsQ9oVAB96Qe7zdmk1xuS`,
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
        },
        responseType: "arraybuffer"
      }
    );

    if (response.status === 200) {
      const imageData = Buffer.from(response.data).toString("base64");
      return `data:image/jpeg;base64,${imageData}`;
    } else {
      throw new Error(`${response.status}: ${response.data.toString()}`);
    }
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};

  async function generate_image(prompt) {
    const discussion_temp = discussions;
    discussion_temp.push({ user: "user", prompt: prompt });
    setDiscussions(discussion_temp);
    discussion_temp.push({ user: "ia", prompt: prompt, loading: true });
    setDiscussions(discussion_temp);
    //user prompt

    //ia generate
    generateImageFromPrompt(prompt)
  .then((imageDataUrl) => {
    if (imageDataUrl) {
      // Utilisez l'URL de l'image pour l'afficher dans votre application
      console.log("Image URL:",imageDataUrl );
      discussion_temp.pop();
      discussion_temp.push({
        user: "ia",
        response: "Response of IA",
        prompt: prompt,
        image:imageDataUrl,
        loading: false,
      });
      setDiscussions(discussion_temp);
    } else {
      console.log("Failed to generate image.");
      discussion_temp.pop();
      discussion_temp.push({
        user: "ia",
        response: "Response of IA",
        prompt: prompt,
        image:"/assets/images/generator-img/photo-7.png",
        loading: false,
      });
      setDiscussions(discussion_temp);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
    
  });
    
    setPrompt("");
  }
  return (
    <>
    {showInfo && (
                <Info
                  showInfo={() => {
                    setShowInfo(!showInfo);
                  }}
                />
              )}
      <main className="page-wrapper rbt-dashboard-page">
        <div className="rbt-panel-wrapper">
          <Header />

          {/* <!-- Imroz Preloader --> */}
          {/* <PageLoader /> */}

          {/* <!-- Start Left panel --> */}
          {/* //sideleft */}
          {/* <LeftSideBar /> */}
          {/* <!-- End Left panel --> */}

          {/* <!-- Main content --> */}
          <div className="rbt-main-content">
            <div className="rbt-daynamic-page-content">
              {/* <!-- Dashboard Center Content --> */}
              <div className="rbt-dashboard-content">
                <div className="content-page">
                  <div className="chat-box-list pt--30" id="chatContainer">
                    {/* <!-- Image Generator --> */}
                    {discussions.length > 0 ? (
                      discussions.map((message) => {
                        if (message?.user == "user") {
                          return (
                            <UserPrompt
                              message={message?.prompt}
                              prompt={message?.prompt}
                            />
                          );
                        } else {
                          return (
                            <BotMessage
                              message={message?.response}
                              prompt={message?.prompt}
                              loading={message?.loading}
                              image={message?.image}
                            />
                          );
                        }
                      })
                    ) : (
                      <EmptyChat
                        onClickSuggested={(m) => {
                          setPrompt(m);
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="rbt-static-bar">
                  <form className="new-chat-form border-gradient">
                    <textarea
                      id="txtarea"
                      rows="1"
                      value={prompt}
                      placeholder="Send a message..."
                      onChange={(e) => {
                        console.log(e.target.value);
                        setPrompt(e.target.value);
                      }}
                    ></textarea>
                    <div className="left-icons">
                      {" "}
                      <button
                        type="button"
                        onClick={() => {
                          setShowKeyboard(!showKeyboard);
                        }}
                        title="Clavier Fon"
                        className="form-icon icon-keyboard"
                      >
                        <i className="feather-type"></i>
                      </button>
                    </div>
                    <div className="right-icons">
                      <div
                        className="form-icon icon-plus"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-custom-className="custom-tooltip"
                        data-bs-title="Choose File"
                      >
                        <input
                          type="file"
                          className="input-file"
                          name="myfile"
                          multiple
                        />
                        <i className="feather-plus-circle"></i>
                      </div>
                      <button
                        className="form-icon icon-mic"
                        data-bs-toggle="tooltip"
                        type="button"
                        data-bs-placement="top"
                        data-bs-custom-className="custom-tooltip"
                        data-bs-title="Voice Search"
                      >
                        <i className="feather-mic"></i>
                      </button>
                      <button
                        className="form-icon icon-send"
                        type="button"
                        id="sendButton"
                        onClick={async () => {
                          await generate_image(prompt)
                        }}
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-custom-className="custom-tooltip"
                        data-bs-title="Send message"
                      >
                        <i className="feather-send"></i>
                      </button>
                    </div>
                  </form>
                  {showKeyboard && (
                    <FonKeyBoard
                      onKeyup={(c) => {
                        setPrompt((precedPrompt) => {
                          const p = precedPrompt + c;
                          return p;
                        });
                      }}
                    />
                  )}

                  <p className="b3 small-text">
                    BlaymaxAI can make mistakes. Consider checking important
                    information.
                  </p>
                </div>
              </div>

              {/* <!-- Dashboard Right Content --> */}
              
            </div>
          </div>
        </div>
        {/* <!--New Chat Section Modal HTML --> */}
        <div
          id="newchatModal"
          className="modal rbt-modal-box copy-modal fade"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content wrapper top-flashlight light-xl">
              <div
                className="section-title text-center mb--30 sal-animate"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h3 className="title mb--0 w-600">Unlock the power of AI</h3>
              </div>
              <div className="genarator-section">
                <ul className="genarator-card-group">
                  <li>
                    <a href="text-generator.html" className="genarator-card">
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/text.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Text Generator</h5>
                        </div>
                        <div className="right-align">
                          <div className="icon-bar">
                            <i data-feather="arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="image-generator.html" className="genarator-card">
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/photo.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Image Generator</h5>
                        </div>
                        <div className="right-align">
                          <div className="icon-bar">
                            <i data-feather="arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="image-editor.html" className="genarator-card">
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/photo-editor.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Photo Editor</h5>
                        </div>
                        <div className="right-align">
                          <div className="icon-bar">
                            <i data-feather="arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="code-generator.html" className="genarator-card">
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/code-editor.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Code Generator</h5>
                        </div>
                        <div className="right-align">
                          <div className="icon-bar">
                            <i data-feather="arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="text-generator.html" className="genarator-card">
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/text-voice.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Text to speech</h5>
                        </div>
                        <div className="right-align">
                          <div className="icon-bar">
                            <i data-feather="arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="text-generator.html" className="genarator-card">
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/voice.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Speech to text</h5>
                        </div>
                        <div className="right-align">
                          <div className="icon-bar">
                            <i data-feather="arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="vedio-generator.html" className="genarator-card">
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/video-camera.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Vedio Generator</h5>
                        </div>
                        <div className="right-align">
                          <div className="icon-bar">
                            <i data-feather="arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="genarator-card disabled"
                      tabindex="-1"
                    >
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/website-design.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Website Generator</h5>
                        </div>
                        <div className="right-align">
                          <span className="rainbow-badge-card">Coming</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="code-generator.html" className="genarator-card">
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/code-editor.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">HTML Generator</h5>
                        </div>
                        <div className="right-align">
                          <div className="icon-bar">
                            <i data-feather="arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="text-generator.html"
                      className="genarator-card disabled"
                      tabindex="-1"
                    >
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/document.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Chat with Documents</h5>
                        </div>
                        <div className="right-align">
                          <span className="rainbow-badge-card">Coming</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="email-generator.html" className="genarator-card">
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/email.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Email Writer</h5>
                        </div>
                        <div className="right-align">
                          <div className="icon-bar">
                            <i data-feather="arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="genarator-card disabled"
                      tabindex="-1"
                    >
                      <div className="inner">
                        <div className="left-align">
                          <div className="img-bar">
                            <img
                              src="/assets/images/generator-icon/lyrics.png"
                              alt="AI Generator"
                            />
                          </div>
                          <h5 className="title">Lyrics Generator</h5>
                        </div>
                        <div className="right-align">
                          <span className="rainbow-badge-card">Coming</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <button className="close-button" data-bs-dismiss="modal">
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!--Like Section Modal HTML --> */}
        <div
          id="likeModal"
          className="modal rbt-modal-box like-modal fade block"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content wrapper top-flashlight leftside light-xl">
              <h5 className="title">Provide additional feedback</h5>
              <div className="chat-form">
                <div className="border-gradient text-form">
                  <textarea rows="6" placeholder="Send a message..."></textarea>
                </div>
              </div>
              <div className="bottom-btn mt--20">
                <a className="btn-default btn-small round" href="#">
                  Send Feedback
                </a>
              </div>
              <button className="close-button" data-bs-dismiss="modal">
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!--DisLike Section Modal HTML --> */}
        <div
          id="dislikeModal"
          className="modal rbt-modal-box dislike-modal fade"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content wrapper top-flashlight leftside light-xl">
              <h5 className="title">Why do you like this response?</h5>
              <select
                className="form-select"
                multiple
                aria-label="multiple select example"
              >
                <option selected>Irrelevant</option>
                <option value="2">Offensive</option>
                <option value="3">Not Correct</option>
              </select>
              <div className="chat-form">
                <h6 className="title">Provide your feedback</h6>
                <div className="border-gradient text-form">
                  <textarea rows="6" placeholder="Send a message..."></textarea>
                </div>
              </div>
              <div className="bottom-btn mt--20">
                <a className="btn-default btn-small round" href="#">
                  Send Feedback
                </a>
              </div>
              <button className="close-button" data-bs-dismiss="modal">
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
        </div>

        {/* <!--Share Section Modal HTML --> */}
        <div
          id="shareModal"
          className="modal rbt-modal-box share-modal fade"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content wrapper modal-small top-flashlight leftside light-xl">
              <h5 className="title">Share</h5>
              <ul className="social-icon social-default transparent-with-border mb--20">
                <li
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="200"
                >
                  <a href="https://www.facebook.com/">
                    <i className="feather-facebook"></i>
                  </a>
                </li>
                <li
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="300"
                >
                  <a href="https://www.twitter.com/">
                    <i className="feather-twitter"></i>
                  </a>
                </li>
                <li
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="400"
                >
                  <a href="https://www.instagram.com/">
                    <i className="feather-instagram"></i>
                  </a>
                </li>
                <li
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="500"
                >
                  <a href="https://www.linkdin.com/">
                    <i className="feather-linkedin"></i>
                  </a>
                </li>
              </ul>
              <div className="chat-form">
                <div className="border-gradient text-form d-flex align-items-center">
                  <input
                    type="text"
                    className="copy-link-input"
                    value="https://www.youtube.com/"
                    readonly
                  />
                  <button
                    className="btn-default bg-solid-primary"
                    type="submit"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <button className="close-button" data-bs-dismiss="modal">
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
