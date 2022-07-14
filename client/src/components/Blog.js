import React from 'react';

import CategoryDetails from './blog-content/categoryDetails';
import NavMenu from './blog-content/navMenu';

import "../css/Blog.css"
import { useParams } from 'react-router-dom';
import ScriptoomLogo from "../img/scriptoom-logo.png"
 
function Blog (){

    const { category } = useParams();

    //Change the title of website
    document.title = "Mathéo LEGER - Blog"

    return (
        <main class="scroller blog-page">
            <div class="scriptoom-logo">
                <img src={ScriptoomLogo} alt="logo"></img>
                <h1>Le blog de Mathéo.</h1>
            </div>
            <section class="blog-section">
                <CategoryDetails category={category ?? "last"}/>
                <NavMenu></NavMenu>
            </section>
        </main>
    )
}
 
export default Blog;