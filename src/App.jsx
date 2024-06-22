import './App.css';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import {useSelector} from 'react-redux'
import TopStag from './components/TopStag';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { requestData } from './data';
import Main from './components/Main';
import { updateNews } from './utils';



function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL);
  const authStatus = useSelector((state) => state.auth.status)
  const [articles, setArticles] = useState([]);
  const [loadingArticle, setLoadingArticle] = useState(true);
  const [request , setRequest] = useState(requestData);
  const [loading, setLoading] = useState(true)
  const [pages, setPages] = useState(0)
  const dispatch = useDispatch()


  useEffect(() => {
    setLoading(true)
    updateNews(request , setLoadingArticle , setArticles , setPages).then(
      setLoading(false)
    )
    }, [request])

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))

  }, [])

return !loading ? (
  <>
   <TopStag />
   <Header setRequest={setRequest} request={request}/>
  <main>
  <Main pages={pages} articles={articles} setRequest={setRequest} request={request} loadingArticle={loadingArticle}/>
    </main>
  </>
) : <Loader />;

}

export default App;