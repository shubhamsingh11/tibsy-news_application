import React from 'react';
import { Grid , Grow , Typography } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard'

const NewsCards = ({ articles }) => {
    return (
        <Grow in>
            {articles.map((articles,i) => (
                <NewsCard />
            ))}    
        </Grow>
    );
}

export default NewsCards;