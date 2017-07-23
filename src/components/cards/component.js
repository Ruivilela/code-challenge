import React, { Component } from 'react';
import request from './../../request';
import { ARTICLES_QUERY } from './../../queries';
import style from './style';

export default class Cards extends Component {
  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.props.actions.getInitialArticles(
        { articles: response.data.articles }
      );
    });
  }
  // Renders
  render() {
    let articles = this.props.articles.map((articles) => {
      return(
        <div style={style.box} key={articles.id}>
          <h2 style={style.author}>
            {articles.author}
          </h2>
          <h6 style={style.title}>
            Title: {articles.title}
          </h6>
          <div>
           {articles.excerpt}
          </div>
        </div>
      )
    })
    return (
      <div className="App" style={style.component}>
        {articles}
      </div>
    );
  }
}
// <h2>Billin code challenge</h2>
// <pre>{JSON.stringify(this.props.articles, null, 2)}</pre>
