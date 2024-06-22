import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader/Loader';
import PropTypes from "prop-types";
import NewsItem from './NewsItem';
import { Col, Row } from "react-bootstrap";
import Container from './Container';

function News( {country = 'in', pageSize = 3, newscategory = 'general'} ) {
    
    News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    newscategory: PropTypes.string
    }

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const updatenews = async () => {
        try {
          const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${newscategory}&apiKey=e75fc245b6864b76a4ab9ba37cf9611c&page=1&pageSize=${pageSize}`);
          setLoading(true);
          const parsedData = response.data;
          setArticles(parsedData.articles);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        updatenews();
        // eslint-disable-next-line
      }, []);
    

  return (
    <>
    {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Row>
              {articles.map((element) => {
          return <Col className='mx-auto md:w-1/3 sm:w-1/4' key={element.url}>
                 <NewsItem 
                 title = {element.title?element.title:""} 
                 description = {element.description?element.description:""} 
                 imageUrl = {element.urlToImage} 
                 newsUrl = {element.url}/>
                 </Col>
              })}
            </Row>

            {/* <div className="container d-flex justify-content-between">
              <button 
              disabled={this.state.page<=1} 
              type="button" 
              className="btn btn-dark" 
              onClick={this.handlePrevClick}> &larr; Previous </button>
              <button 
              disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} 
              type="button" 
              className="btn btn-dark" 
              onClick={this.handleNextClick}> Next &rarr; </button>
            </div> */}
        
          </Container>
        </>
      )}
      </>
  )
}

export default News
