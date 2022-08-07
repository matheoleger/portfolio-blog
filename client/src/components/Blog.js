import React, {useState} from 'react';

import CategoryDetails from './blog-content/categoryDetails';
import NavMenu from './blog-content/navMenu';

import "../css/Blog.css"
import { useParams } from 'react-router-dom';
import ScriptoomLogo from "../img/scriptoom-logo.png"
 
function Blog (){

    // const { category } = useParams();
    const [category, setCategory] = useState();
    const [listOfCategories, setListOfCategories] = useState(["Tous les articles", "Expériences professionnelles"]);

    //Change the title of website
    document.title = "Mathéo LEGER - Blog"

    return (
        <main class="scroller blog-page">
            <div class="scriptoom-logo">
                <img src={ScriptoomLogo} alt="logo"></img>
                <h1>Le blog de Mathéo.</h1>
            </div>
            <section class="blog-section">
                <CategoryDetails setListOfCategories={setListOfCategories} category={category ?? "Tous les articles"}/>
                <NavMenu setCategory={setCategory} categories={listOfCategories}></NavMenu>
            </section>
        </main>
    )
}
 
export default Blog;