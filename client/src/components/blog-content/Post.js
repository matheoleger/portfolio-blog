import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { ClipLoader, BarLoader, BeatLoader, BounceLoader, CircleLoader, ClimbingBoxLoader } from "react-spinners";
import {useLocation, useParams} from 'react-router';

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import Tag from "./tag"
import ReturnButton from "../includes/ReturnButton"

import '../../css/SummaryCard.css';

function Post (){
 
    const params= useLocation();
    const { post:postSlug } = useParams();

    const getIdBySlug = () => {
        const id = postSlug.match(/(?:[^-](?!(-)))+$/gm);
        return {id};
    }

    const {id} = params.state ?? getIdBySlug();
    const [post, setPost] = useState({});

    const getPost = () => {
        // -(?:.(?!-))+$
        // (?:[^-](?!(-)))+$
        axios.get(`/api/post/${id}`).then((response) => {setPost(response.data); console.log({response}); console.log(response.data.post)});
    }

    useEffect(getPost, []);

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        console.log(height, width);
        return {
          width,
          height
        };
    }

    const { height, width } = getWindowDimensions();

    return (
        <div>
            <ReturnButton link="/blog" isFixed={true}/>
            {
                (width <= 600) ? (
                <div className="background-header"></div>
                ) : (
                <></>
                )
            }
            <article className="post">
                {
                    (post.post) ? (
                        <>
                            <img className="post-img" src={post.post.cover}/>
                            <div className="post-date-and-tags">
                                <h4 className="post-date">{new Date(post.post.date).toLocaleDateString('fr-FR')}</h4>
                                <div className="tag-list">
                                    {post.post.tags.map((tag, key) =>(
                                        <Tag key={key} name={tag.name} id={tag.id} color={tag.color}/>
                                    ))}
                                </div>
                            </div>
                            <h1 className="post-title">{post.post.title}</h1>

                            <p className="post-description">{post.post.description}</p>
                        </>
                    ) : <div className="post-spinner"><ClimbingBoxLoader/><h3>Chargement...</h3></div>
                }
                <section className="post-content">
                    <ReactMarkdown children={post.markdown} remarkPlugins={[remarkGfm]}/>
                </section>
                
            </article>
        </div>
        
    )
}
 
export default Post;