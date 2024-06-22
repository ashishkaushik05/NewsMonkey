// Main.jsx
import React from 'react';
import News from "./News";
import PaginationComponent from './Pagination'; // Import Pagination component

export default function Main({ articles, loadingArticle ,setRequest , request , pages}) {
  return (
    <>
      <News articles={articles} loading={loadingArticle} />

      <PaginationComponent pages={pages} request={request} setRequest={setRequest}  />
    </>
  );
}
