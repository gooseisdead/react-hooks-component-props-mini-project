import React from 'react';
import Article from '../components/Article'


function ArticleList({ articles }) {

    const articleObj = articles.map((article) => {return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} time={article.minutes} /> })

    return (
        <main>{articleObj}</main>
    )
}

export default ArticleList;