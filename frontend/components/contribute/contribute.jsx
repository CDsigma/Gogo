import React, { Component } from 'react';
import CloseIcon from '../general_purpose_icons/close_icon';

export default class Contribute extends Component {

    constructor(props) {
        super(props)
        // debugger;

        this.setState({
            newFunds: 0
        })

        // debugger

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Button Clicked");
        this.props.updateCampaign({
            id: this.props.id,
            funding: Number(this.props.funding) + Number(this.state.newFunds)
            }).then( ()=>{
                // debugger;
                this.props.getCampaign(this.props.id);
            });
        // debugger;
        this.props.closeModal();
        
        //.then(() => this.props.history.push('/user'));
    }

    render() {
        // debugger;
        return (
            <div className="contribute-white-background">
                <div className="close-icon-button-div">
                    <button className="close-icon-button" onClick={this.props.closeModal}><CloseIcon /></button>
                </div>
                <div className="contribute-content-container">
                    <h2 className="contribute-title"><b>Back this project</b></h2>
                    
                    <div className="contribute-input-container-div">
                        <h4 className="contribute-input-container-sub-title">Make a contribution</h4>
                        <div className="contribute-input-div">
                            <div className="contribute-input-label" id="contribute-input-left">$</div>
                            <input className="contribute-input" type="text" onChange={this.handleInput('newFunds')}/>
                            <div id="contribute-input-right" className="contribute-input-label">USD</div>
                            <button onClick={this.handleSubmit} className="contribute-button">Contribute</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
