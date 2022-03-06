import React from 'react';
import Articles from '../components/Articles';
import Carousel from '../components/Carousel';
import { getJsonData } from '../utils/tool'

export const getStaticProps = async () => {
  const data = await getJsonData()

  return {
    props: {
      data
    }
  }
}

const Home = ({ data }) => {

  return (
    <>
      <Carousel data={data.carrousel} />
      <Articles data={data.articles} />
    </> 
  );
}

export default Home;