import React, { Component } from 'react'

export default class Clock extends Component {
    render() {
        return (
            <div className="explore-clock">
                <svg viewBox="0 0 14 14" className="icon-clock">
                    <g fill-rule="evenodd">
                        <circle cx="7" cy="7" r="7">
                        </circle>
                        <path stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M6.93 4.375v3.957h2.625">
                        </path>
                    </g>
                </svg>
            </div>
        )
    }
}
