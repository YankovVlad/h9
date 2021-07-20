import React from "react"

export default class Input extends React.Component {
    state = {
        value: ''
    }

    onChangeInput = (event) => {
        this.setState({value: event.target.value})
    }
    onClickClear = () => {
        this.setState({value: ''})
    }

    render () {
        return (
            <div className={'wrap'}>
                <input type='text' onChange={this.onChangeInput} value={this.state.value}/>
                <h4>{this.state.value}</h4>
                <button onClick={this.onClickClear}>Clear</button>
            </div>
        )
    }
}