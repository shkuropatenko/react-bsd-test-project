import React from 'react';
import Display from './ThirdPageComponent/Display';
import ButtonPanel from './ThirdPageComponent/ButtonPanel';
import calculate from '../logic/calculate';
import './ThirdPageComponent/App.css';

export default class Third extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}