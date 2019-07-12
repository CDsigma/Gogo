import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class StartMyCampaignButton extends Component {

    constructor(props) {
        super(props);
        let { currentUserId } = this.props
        // debugger;
        this.state = {
            author_id: currentUserId,
            title: "My Campaign Title", 
            launched: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // debugger;
        console.log("SUBMITTING")
        //this.props.history.push(`/${campaign.campaign.id}/edit`)
        // debugger;
        this.props.createNewCampaign(this.state).then((campaign) => this.props.history.push(`/${campaign.campaign.id}/edit`));
    }

    render() {
        let { currentUserModal } = this.props
        if (currentUserModal !== null) {
            return (
                <div className="simple-column-center">
                    {/* <Link to="/campaignId/edit"> */}
                    <form>
                        <button onClick={this.handleSubmit} className="blue-hover-button">
                            START MY CAMPAIGN
                        </button>
                    </form>
                    {/* </Link> */}
                </div>
            )
        } else {
            return (
                <div className="simple-column-center">
                    <button className="blue-hover-button" onClick={() => this.props.openModal('login')}>
                        START MY CAMPAIGN
                    </button>
                </div>
            )
        }
    }
}

export default withRouter(StartMyCampaignButton)