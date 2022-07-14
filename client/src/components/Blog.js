import React from 'react';

import BlogHome from './blog-content/blogHome';
import NavMenu from './blog-content/navMenu';

import "../css/Blog.css"
 
function Blog (){

    //Change the title of website
    document.title = "Mathéo LEGER - Blog"

    return (
        <main class="scroller blog-page">
            <BlogHome></BlogHome>
            <NavMenu></NavMenu>
        </main>
    )
}
 
export default Blog;