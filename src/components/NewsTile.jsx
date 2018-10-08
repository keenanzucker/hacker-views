import React, { Component } from 'react';
import '../App.css';

class NewsTile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="news-story-container">
        <h4><a target='_blank' href={this.props.story.url}>{this.props.story.title}</a></h4>
        <label>{this.props.story.domain}</label>
        <p>{this.props.story.points}</p>
      </div> 
    );
  }

}

export default NewsTile;
