
import './App.css';
import React from 'react';
import './names.json'

export default class ModArr extends React.Component {
  state = {
    peoples: ['Jonh', 'Gordon']
  }

  onClickGetName = () => {
    const names = require('./names.json')
    const index = Math.floor(Math.random() * 13)
    const oneMoreName = names.filter((name, ind) => ind === index)
    const newPeoples =[...this.state.peoples, oneMoreName]
    this.setState({peoples: newPeoples})
    
  }

  render () {
    return (
      <div className={'wrap'}>
        <button onClick={this.onClickGetName}>Add new name</button>
          <ul className={'list'}>
            {this.state.peoples.map((name) => <li>{name}</li>)}
          </ul>
          
      </div>
      
    )
  }
};
