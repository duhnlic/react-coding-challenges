import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

export const RocketWrapper = React.memo( function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  shouldComponentUpdate(){
    return false;
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
