import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ClipLoader, BarLoader, BeatLoader, BounceLoader, CircleLoader, ClimbingBoxLoader } from "react-spinners";

import SummaryCard from "./summaryCard";

/* idées pour le markdown/image :
 - stockage des images sur S3 (AWS)
 - je récupère le lien de l'image que j'intègre dans le fichier markdown :
    - besoin de mettre le lien des imgs dans une BDD ? (car si on met le lien des imgs directement dans le fichier markdown)
        --> besoin pour la SummaryCard
- stockage des fichiers .md sur S3 (AWS)
- conversion de .md en html react : 
    - https://github.com/remarkjs/react-markdown
    - https://stackoverflow.com/questions/31875748/how-do-i-render-markdown-from-a-react-component
    --> il sera surement plus simple d'utiliser Remarkable et de mettre le contenu dans un composant React (2eme solution donc)
*/

function CategoryDetails ({category, setListOfCategories}){
    
    const [posts, setPosts] = useState([]);

    const setCardsInformations = () => {
        axios.get("/api/posts").then((response) => setPosts(response.data));
    }

    useEffect(() => {
        setCardsInformations();
    },[])

    useEffect(() => {
        let finalListOfCategories = ["Tous les articles"];

        let formattedCategories = posts.flatMap((post) => {
            return post.tags.map((tag) => tag.name);
        })

        formattedCategories.forEach((formattedCategory) => {
            if(finalListOfCategories.includes(formattedCategory)) return;

            finalListOfCategories.push(formattedCategory);
        })

        setListOfCategories(finalListOfCategories);
    }, [posts])

    return (
        <div>
            <h2 className="category-name">{category}</h2>
            <section className="bloghome-summarycard-list">
                {
                (posts) ?
                posts.map((post, key) => {
                    if(category == "Tous les articles") {
                        return(
                            <SummaryCard 
                            key={key}
                            id={post.id}
                            tags={post.tags}
                            imageSrc={post.cover}
                            title={post.title}
                            description={post.description}
                            date={new Date(post.date)}
                            slug={post.slug}
                        />
                        )        
                    } else {

                        const categoryFind = post.tags.find(tag => tag.name == category);

                        if(categoryFind) {
                            return(
                                <SummaryCard 
                                key={key}
                                id={post.id}
                                tags={post.tags}
                                imageSrc={post.cover}
                                title={post.title}
                                description={post.description}
                                date={new Date(post.date)}
                                slug={post.slug}
                            />
                            )
                        }
                    }
                }
                )
                :
                <div className="post-spinner"><ClimbingBoxLoader/><h3>Chargement...</h3></div>
                }            
            </section>       
        </div>


    )
}
 
export default CategoryDetails;