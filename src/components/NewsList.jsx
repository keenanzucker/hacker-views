import React, { Component } from 'react';
import '../App.css';

class NewsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      news: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('https://api.hnpwa.com/v0/news/1.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          news: data,
          isLoading: false
        })
      })
  }

  render() {
    if (this.state.isLoading) return (<div>Loading...</div>);
    const news = this.state.news;

    return (
      <div>
          {news.map(story => {
            return (
              <div className="news-story-container" key={story.id}>
                  <h4><a target='_blank' href={story.url}>{story.title}</a></h4>
                  <label>{story.domain}</label>
                  <p>{story.points}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default NewsList;
