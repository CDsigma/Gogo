import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
            <div className="campaign-edit-side-bar">
                <h1>Side Bar</h1>
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        )
    }
}
