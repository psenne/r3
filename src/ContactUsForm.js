import axios from "axios"
import React, { Component } from "react"

class ContactUsForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
        }

        this.HandleInput = this.HandleInput.bind(this)
        this.SendMessage = this.SendMessage.bind(this)
        this.ProcessResponse = this.ProcessResponse.bind(this)
    }

    HandleInput(ev) {
        const fieldname = ev.target.name
        const val = ev.target.value
        this.setState({
            [fieldname]: val,
        })
    }

    SendMessage(ev) {
        ev.preventDefault()

        // var headers = new Headers()
        // var formData = new FormData()

        // headers.set("Accept", "application/json")
        // formData.append("name", this.state.name)
        // formData.append("email", this.state.email)
        // formData.append("message", this.state.message)

        // var fetchOptions = {
        //     method: "POST",
        //     headers,
        //     body: formData,
        //     mode: "cors", // no-cors, cors, *same-origin
        // }

        const { name, email, message } = this.state
        const url = "https://www.renegadetec.com/send.php"

        const params = new URLSearchParams()
        params.append("name", name)
        params.append("email", email)
        params.append("message", message)

        axios
            .post(url, params)
            .then((jsonData) => {
                this.ProcessResponse("Message sent. Someone will be in contact with you soon.", true)
            })
            .catch((err) => this.ProcessResponse("There was an error sending you message. Please try again later.", false))

        // 	fetch(url, fetchOptions)
        // 	.then(response => response.json())
        // 	.then(jsonData => this.ProcessResponse(jsonData.message, true))
        // 	.catch(err => this.ProcessResponse("There was an error sending you message. Please try again later.", false));
        // }
    }

    ProcessResponse(postResponseMessage, successful) {
        this.props.onClick(postResponseMessage, successful)
        if (successful) {
            this.setState({
                name: "",
                email: "",
                message: "",
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.SendMessage}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" required title="Please provide full name." name="name" type="text" value={this.state.name} onChange={this.HandleInput} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" required title="Please provide valid email address." name="email" type="email" value={this.state.email} onChange={this.HandleInput} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" required title="How can we help you?" name="message" value={this.state.message} onChange={this.HandleInput}></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input type="submit" className="button" value="Send" />
                        </div>
                    </div>
                </form>
                <footer className="footer">
                    <h2 className="title is-size-3 has-text-light">Corporate Information</h2>
                    <address>
                        <span className="icon is-large ">
                            <i className="ion-location fa-1x"></i>
                        </span>
                        5501 Merchants View Square Suite 722 Haymarket, VA 20169
                    </address>
                    <address>
                        <span className="icon is-large ">
                            <i className="ion-iphone fa-1x"></i>
                        </span>
                        703-753-5300
                    </address>
                </footer>
            </div>
        )
    }
}

export default ContactUsForm
