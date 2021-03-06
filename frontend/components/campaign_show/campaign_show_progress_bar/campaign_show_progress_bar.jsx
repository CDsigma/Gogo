import React, { Component } from 'react'

const Filler = (props) => {
    if (props.percentage > 100) {
        return <div className="explore-progress-bar-filler" style={{ width: `${100}%` }} />
    } else {
        return <div className="explore-progress-bar-filler" style={{ width: `${props.percentage}%` }} />
    }
}

export default class ExploreProgressBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            percentage: 50
        }
    }


    render() {
        // debugger;

        return (
            <div className="explore-progress-bar">
                <Filler className="explore-progress-bar-filler" percentage={this.props.percentage} />
            </div>
        )
    }
}
