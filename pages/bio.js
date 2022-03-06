import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const getStaticProps = async () => {

    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // const res = await axios.get('https://baconipsum.com/api/?type=all-meat&paras=5')

    return {
        props: {
            data: res.data
        }
    }
}


const Bio = ({ data }) => {

    // console.log(data);

    const [bioData, setBioData] = useState(null)

    useEffect(() => {
        const bioData = axios.get("https://baconipsum.com/api/?type=all-meat&paras=5").then(res => {
            setBioData(res.data)
        })
    }, [])


    return (
        <div className="row">
            <Head>
                <meta name="description" content="Biography of hokusai" />
            </Head>
            <div className="col-lg-8">
                <article>
                    <div className="mb-4">
                        <h1 className="fw-bolder mb-1">Houkusai Bio</h1>
                    </div>
                    <section className="mb-5">
                        {bioData ?
                            bioData.map((bio, i) => (
                                <p key={i} className="fs-5 mb-4">
                                    {bio}
                                </p>
                            ))
                            :
                            'Loading ...'
                        }
                    </section>
                </article>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <Image
                        src={`/images/bio/bio.jpg`}
                        layout="responsive"
                        width="712"
                        height="1024"
                        alt='image'
                    />
                </div>
            </div>
        </div>
    );
}

export default Bio;