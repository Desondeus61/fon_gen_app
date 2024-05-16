export default function UserPrompt({message}){


    return (
        <>
        <div className="chat-box author-speech bg-flashlight">
                      <div className="inner">
                        <div className="chat-section">
                          <div className="author">
                            <img
                              className="w-100"
                              src="/assets/images/team/team-01.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="chat-content">
                            <h6 className="title">Mì</h6>
                            <p>
                             {message}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
        </>
    )
}