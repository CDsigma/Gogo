import React, { Component } from 'react';
import CloseIcon from '../general_purpose_icons/close_icon';

export default class Contribute extends Component {
    render() {
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
                            <input className="contribute-input" type="text"/>
                            <div id="contribute-input-right" className="contribute-input-label">USD</div>
                            <button className="contribute-button">Contribute</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
