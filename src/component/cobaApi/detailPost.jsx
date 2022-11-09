import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DetailPost(props) {
    const { id } = useParams();

    const [title, setTitle]= useState('')
    const [desc, setDesc] = useState('')

    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:3004/posts/${id}`)
        .then((res) => {
           console.log(res.data);
           const isiPost = res.data
           setTitle(isiPost.title)
           setDesc(isiPost.body)
        })
    }, [id])


    return (
        <div>
            <div className="container my-5">
                <div className="card">
                    <h1 className='text-center my-4'>
                    {title}
                    </h1>
                    <img className="card-img-top" src='https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png' alt='react pict'>
                    </img>
                    <div className="card-body">

                        <p>
                            {desc}
                        </p>
                    </div>
                    <div className="social-media text-center mb-5">
                        <h5>Share With Your Friend</h5>
                        <a href="/" className='me-3'><FaFacebook /></a>
                        <a href="/" className='me-3'><FaTwitter /></a>
                        <a href="/" className='me-3'><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
