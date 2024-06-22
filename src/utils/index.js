// utils.js
import axios from 'axios';
import { pages } from '../data';

export const endpointPath = (request) => 
  `https://newsapi.org/v2/top-headlines?country=${request.country}&category=${request.category}&apiKey=e75fc245b6864b76a4ab9ba37cf9611c&page=${request.page}&pageSize=${request.pageSize}`
export const endpointSearch = (searchQuery, request) => 
  `https://newsapi.org/api/v4/search?q=${searchQuery}&lang=en&pageSize=${request.pageSize}&apikey=${request.apiKey}`;

export const updateNews = async (request, setLoadingArticle, setArticles , setPages) => { 
  setLoadingArticle(true);
    try { 
      console.log(request)
      const response = await axios.get(endpointPath(request)); 
      const parsedData = response.data; 
      setArticles(parsedData.articles); 
      setPages(parsedData.totalResults);
      console.log(parsedData.articles);
    } catch (error) { 
      console.error(error); 
    } finally {
      setLoadingArticle(false); 
    }
};
