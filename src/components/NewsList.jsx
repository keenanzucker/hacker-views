import React, { Component } from 'react';
import '../App.css';
import NewsTile from './NewsTile';

class NewsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      news: [],
      isLoading: false
    };
  }

  // The default state is sorting by 'hot' or the default Hacker News stories
  componentDidMount() {
    this.getHot();
  }

  getNewest = () => {
    this.setState({isLoading: true});

    fetch('https://api.hnpwa.com/v0/newest/1.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          news: data,
          isLoading: false
        })
      })
  }

  getTop = () => {
    this.setState({isLoading: true});

    fetch('https://api.hnpwa.com/v0/news/1.json')
      .then(res => res.json())
      .then(data => {

        let sortedData = data.sort((a,b) => {
          if (a.points > b.points) return -1;
          if (a.points < b.points) return 1;
          return 0;
        });

        this.setState({
          news: sortedData,
          isLoading: false
        })
      })
  }

  getHot = () => {
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
        <button onClick={this.getNewest}>Newest</button>
        <button onClick={this.getTop}>Top</button>
        <button onClick={this.getHot}>Hot</button>
        <div className="news-list-container">
            {news.map(story => {
              return (
                <NewsTile key={story.id} story={story}/> 
              );
            })}
        </div>
      </div>
    );
  }
}

export default NewsList;

