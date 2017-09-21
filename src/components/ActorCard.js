import React, {Component} from 'react';

export default class ActorCard extends Component{
  render(){
    let actor = this.props.data


  return(
    <div className="actorCard">
      <p>first name: {actor.firstName}</p>
      <p>last name: {actor.lastName}</p>
      <p>Credits: {actor.credits}</p>
    </div>
  )
  }
}
