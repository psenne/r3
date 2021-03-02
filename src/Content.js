import React from "react"
import classnames from "classnames"
import ContactUsForm from "./ContactUsForm"

function Content(props) {
    return (
        <div>
            <div className={classnames("message-body", { "message-body-shown": props.messagePanel === "about-us" })}>
                <h1 className="title has-text-info">About Renegade Technology</h1>
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <p>
                                Renegade Technology is a Veteran Owned Small Business, based in Northern Virginia that brings innovative technical solutions to our customers. We employ subject matter experts in the most in-demand technology
                                domains; specializing in providing industry leading consulting to our clients.
                            </p>
                        </div>
                    </div>
                </article>
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <div className="p">
                                <span className="icon is-large title">
                                    <i className="ion-unlocked fa-2x"></i>
                                </span>
                                <div>
                                    <h4 className="title has-text-grey">Cyber Exploitation and Operations:</h4>
                                    <p>
                                        As cyber attacks continue to find new victims, Renegade provides prominent industry personnel with in-depth perspective on the state of the industry. We also offer cyber threat analysis, risk
                                        assessment, vulnerability analysis, penetration testing, incident response, and cyber threat intelligence services.
                                    </p>
                                </div>
                            </div>
                            <div className="p">
                                <span className="icon is-large title">
                                    <i className="ion-earth fa-2x"></i>
                                </span>
                                <div>
                                    <h4 className="title has-text-grey">Targeting Analysts:</h4>
                                    <p>Renegade Technology provides specialists who use unique datasets, specialized tools, and network analysis techniques to identify and analyze key threats.</p>
                                </div>
                            </div>
                            <div className="p">
                                <span className="icon is-large title">
                                    <i className="ion-iphone fa-2x"></i>
                                </span>
                                <div>
                                    <h4 className="title has-text-grey">Digital Forensics Exploitation:</h4>
                                    <p>
                                        We employ industry leaders in digital forensics and technical analysis with in-depth expertise related to scientifically researching, collecting, processing, analyzing and presenting findings in
                                        support of vulnerability mitigation, data recovery, and assessing and identifying malicious behaviors within digital datasets.
                                    </p>
                                </div>
                            </div>
                            <div className="p">
                                <span className="icon is-large title">
                                    <i className="ion-pound fa-2x"></i>
                                </span>
                                <div>
                                    <h4 className="title has-text-grey">Technical Developers:</h4>
                                    <p>
                                        Work in the digital arena and specialize in the design, development, integration, and deployment of cutting edge tools, techniques and systems to support customer operations and other information
                                        operation activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div className={classnames("message-body", { "message-body-shown": props.messagePanel === "jobs" })}>
                <h1 className="title has-text-info">Wanna be a Renegade?</h1>
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <p>Here are three big reasons to join:</p>
                        </div>
                    </div>
                </article>
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <div className="p">
                                <span className="icon is-large title">
                                    <i className="ion-briefcase fa-2x"></i>
                                </span>
                                <div>
                                    <h4 className="title has-text-grey">Great Jobs:</h4>
                                    <p>
                                        Renegade Technology isn't simply a little company with little opportunities. We pride ourselves on our ability to partner on contracts and proposals that win us work. This gives Renegades more places
                                        to provide mission impact. Our goal is to grow the number of contracts we have by 3-4 each year.
                                    </p>
                                </div>
                            </div>
                            <div className="p">
                                <span className="icon is-large title">
                                    <i className="ion-trophy fa-2x"></i>
                                </span>
                                <div>
                                    <h4 className="title has-text-grey">Great Benefits:</h4>
                                    <p>
                                        With liberal financing of healthcare insurance, 401k contributions, and paid vacation, Renegade Technology has some of the finest benefits in the industry. Talk to one of our recruiters to learn about
                                        what Renegade can do for you.
                                    </p>
                                </div>
                            </div>
                            <div className="p">
                                <span className="icon is-large title">
                                    <i className="ion-calendar fa-2x"></i>
                                </span>
                                <div>
                                    <h4 className="title has-text-grey">Great Events:</h4>
                                    <p>
                                        Enjoy wineries, comedy shows, paintball, and family events? Haven't had a decent holiday party in years? Join Renegade and you can experience first-hand how Renegade prioritizes company events to
                                        build company comraderie and ensure its employees remain happy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <div className={classnames("message-body", { "message-body-shown": props.messagePanel === "contact-us" })}>
                <h2 className="title is-size-3 has-text-light">Contact Us</h2>
                <ContactUsForm onClick={props.submitForm} />
            </div>
        </div>
    )
}
export default Content
