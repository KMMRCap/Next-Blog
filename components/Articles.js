import React from 'react';
import Masonry from 'react-masonry-css';
import CardItem from './CardItem'

const Articles = ({ data }) => {

    const breakpoints = {
        default: 3,
        768: 2,
        500: 1
    }

    return (
        <Masonry
            breakpointCols={breakpoints}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
        >
            {data.map(article => (
                <CardItem key={article.id} article={article} />
            ))}
        </Masonry>
    );
}

export default Articles;