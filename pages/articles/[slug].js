import Image from 'next/image';
import React from 'react';
import { getJsonData } from '../../utils/tool'

export const getStaticPaths = async () => {
    const data = await getJsonData()
    const paths = data.articles.map(article => (
        {
            params: { slug: article.slug }
        }
    ))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const data = await getJsonData()
    const articles = data.articles
    let articleData = articles.find(item => item.slug === params.slug)

    return {
        props: {
            data: articleData
        }
    }
}


const Article = ({ data }) => {

    return (
        <div>
            <Image
                src={`/images/arts/${data.img}`}
                layout="responsive"
                width="1920"
                height="1080"
                alt='image'
            />
            <div className="article_container">
                <h1>{data.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </div>
        </div>
    );
}

export default Article;