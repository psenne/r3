import React, { Component } from 'react';
import classnames from 'classnames';
import Content from './Content';
import './App.css';
import './bulmacopy.css';
import './flex.css';



class App extends Component {
	constructor() {
		super();
		this.state = {
			messagePanel: null,
			logoRaised: false,
			formresponse: '',
			showresponse: false
		}

		this.showMessage = this.showMessage.bind(this);
		this.PostResponse = this.PostResponse.bind(this);
	}

	showMessage(panel) {
		panel = this.state.messagePanel === panel ? null : panel; //toggle showing the content box
		this.setState({
			messagePanel: panel
		});
		
		if(panel !== null){ //delay raising the logo for better effect
			setTimeout(
				()=>{
					this.setState({
						logoRaised: true	
					});		
				}, 1000
			);
		}
		else{
			this.setState({
				logoRaised: false	
			});
		}
	}


	PostResponse(message, successful){
		this.setState({
			formresponse: message,
			showresponse: true
		}, 
		()=>{
			setTimeout(()=>{
				this.setState({
					showresponse: false
				}, 
				()=>{
					setTimeout(()=>{
						this.setState({
							formresponse: ''
						})
					}, 1000)			
				})
			}, 2000)
		});

		if(successful){
			this.setState({
				messagePanel: null,	
				logoRaised: false	
			});
		}
	}

	render() {
		return (
			<div className="outer">
				<div className="main">
					<div className="left"></div>
					<div className={classnames('body', { 'body-raised': this.state.messagePanel })}>
						<div className="header">
								<img className={classnames('logo', { 'logo-raised': this.state.logoRaised })} src="RenegadeLogo_white_transparent.png" alt="Renegade Technology" />
						</div>
						<div className={classnames('message', { 'message-raised': this.state.messagePanel })}>
							<Content messagePanel={this.state.messagePanel} submitForm={this.PostResponse} />
						</div>
					</div>
					<div className="right"></div>
				</div>
				<nav className="navbar">
					<a className="nav-item" onClick={() => this.showMessage(null)}><span className="icon is-large"><i className="ion-ios-home  fa-2x"></i></span></a>
					<a className="nav-item" onClick={() => this.showMessage("about-us")}><span className="icon is-large"><i className="ion-person-stalker fa-2x"></i></span></a>
					<a className="nav-item" onClick={() => this.showMessage("jobs")}><span className="icon is-large"><i className="ion-person-add fa-2x"></i></span></a>
					<a className="nav-item" onClick={() => this.showMessage("contact-us")}><span className="icon is-large"><i className="ion-ios-email fa-2x"></i></span></a>
				</nav>
				<div className={ classnames('response', {'response-shown': this.state.showresponse}) }>{this.state.formresponse}</div>
			</div>
		);
	}
}

export default App;
