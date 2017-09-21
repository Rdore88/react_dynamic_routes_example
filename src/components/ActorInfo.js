import React, {Component} from 'react';
import actors from '../data/actors'
import ActorCard from './ActorCard';

export default class ActorInfo extends Component{
  render(){
    console.log(this.props.match.params);
  const actor = this.props.match.params.hello
  let favActor = actors.map((celeb) =>{
    if (celeb.firstName === actor) {
      return(
        <ActorCard  data={celeb} />
      )
    }
  })
    return(
      <div className="favActor">
        {favActor}
      </div>
    )
  }
}
