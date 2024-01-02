import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }



  constructor(){
    super();
    this.state={articles: [], loading: true, page: 1}
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e75fc245b6864b76a4ab9ba37cf9611c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
 }

 handlePrevClick = async () => {
  console.log("Previous Clicked");

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e75fc245b6864b76a4ab9ba37cf9611c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});  
  let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
  })
 }

 handleNextClick = async () => {
  console.log("Next Clicked");
  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e75fc245b6864b76a4ab9ba37cf9611c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true});
  let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
  })
}}


  render() {
    console.log("render");
    return (
      <div className = "container my-3">
        <h1 className = "text-center my-5">NewsMonkey - Top Headlines</h1>
        <div className = "text-center">
          {this.state.loading && <Spinner classname = "text-center"/>}
          </div>
        <div className= "row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col md-4" key={element.url}>
                 <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:""} 
                 imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                 </div>
              })}
        </div>
     
     <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
          <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr; </button>
     </div>
     </div>
    )
  }
}

export default News
