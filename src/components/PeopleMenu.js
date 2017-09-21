import React, {Component} from 'react';
import actors from '../data/actors'
import {NavLink} from 'react-router-dom';
export default class PeopleMenu extends Component{
  render(){
    console.log(actors);
    let match = this.props.match

  let navActors = actors.map((actor) => {
    return(
      <li key={actor.id}>
      <NavLink activeClassName="active" className="actorLink" to={`${match.url}/${actor.firstName}`}>{actor.firstName}</NavLink>
      </li>
    )
  })
  console.log(navActors);
  return(
    <ul className="actorChoices">
      {navActors}
    </ul>
  )
  }
}
