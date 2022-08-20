import React, {useState} from 'react';
import { ClipLoader, BarLoader, BeatLoader, BounceLoader, CircleLoader, ClimbingBoxLoader } from "react-spinners";

import CategoryDetails from './blog-content/categoryDetails';
import NavMenu from './blog-content/navMenu';

import "../css/Blog.css"
import { useParams } from 'react-router-dom';
import ScriptoomLogo from "../img/scriptoom-logo.png"
 
function Blog (){

    // const { category } = useParams();
    const [category, setCategory] = useState();
    const [listOfCategories, setListOfCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //Change the title of website
    document.title = "Mathéo LEGER - Blog"

    return (
        <main className="scroller blog-page">
            <div className="scriptoom-logo">
                <img src={ScriptoomLogo} alt="logo"></img>
                <h1>Le blog de Mathéo.</h1>
            </div>
            <section className="blog-section">
                {/* {
                    (listOfCategories.length) ? (
                        <>
                            <CategoryDetails setListOfCategories={setListOfCategories} category={category ?? "Tous les articles"}/>
                            <NavMenu setCategory={setCategory} categories={listOfCategories}></NavMenu>
                        </>
                    ) : (
                        <ClimbingBoxLoader/>
                    )
                } */}
                <CategoryDetails setListOfCategories={setListOfCategories} category={category ?? "Tous les articles"} setIsLoading={setIsLoading}/>
                <NavMenu setCategory={setCategory} categories={listOfCategories}></NavMenu>
                {
                    (!isLoading) ? (
                        <></>
                    ) : (
                        <div className="blog-loader"><ClimbingBoxLoader/><h3>Chargement...</h3></div>
                    )
                }
            </section>
        </main>
    )
}
 
export default Blog;