import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { ClipLoader, BarLoader, BeatLoader, BounceLoader, CircleLoader, ClimbingBoxLoader } from "react-spinners";
import {useLocation } from 'react-router';

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
// import { NotionRenderer } from 'react-notion-x'
// import { Render } from '@9gustin/react-notion-render';
import Tag from "./tag"

import '../../css/SummaryCard.css';

function Post (){
 
    const params= useLocation();
    const {id} = params.state;

    const [post, setPost] = useState({});

    const getPostBySlug = () => {
        axios.get(`/api/post/${id}`).then((response) => {setPost(response.data); console.log({response}); console.log(response.data.post)});

    }

    useEffect(getPostBySlug, []);

    return (
        <article class="post">
            {/* <img>{post.post.cover}</img> */}
            {
                (post.post) ? (
                    <>
                        <img class="post-img" src={post.post.cover}/>
                        <div class="post-date-and-tags">
                            <h4 class="post-date">{new Date(post.post.date).toLocaleDateString('fr-FR')}</h4>
                            <div class="tag-list">
                                {post.post.tags.map(tag =>(
                                    <Tag name={tag.name} id={tag.id} color={tag.color}/>
                                ))}
                            </div>
                        </div>
                        <h1 class="post-title">{post.post.title}</h1>

                        <p class="post-description">{post.post.description}</p>
                    </>
                ) : <div class="post-spinner"><ClimbingBoxLoader/><h3>Chargement...</h3></div>
            }

            {/* <NotionRenderer>{post.markdown}</NotionRenderer> */}
            {
                // (post) ? <NotionRenderer recordMap={post} fullPage={true} darkMode={false}/> : <></>
            }
            {/* <Render blocks={post} /> */}
            {/* <ReactMarkdown>{post.markdown}</ReactMarkdown> */}
            <section class="post-content">
                <ReactMarkdown children={post.markdown} remarkPlugins={[remarkGfm]}/>
            </section>
            
        </article>
    )
}
 
export default Post;