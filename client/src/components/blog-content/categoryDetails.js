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

function CategoryDetails (){
    
    const [posts, setPosts] = useState();

    const setCardsInformations = () => {
        axios.get("/api/posts").then((response) => setPosts(response.data));
    }

    useEffect(() => {
        setCardsInformations();
    },[])

    return (
        <div>
            <h2 class="category-name">Derniers articles</h2>
            <section class="bloghome-summarycard-list">
                {
                (posts) ?
                posts.map(post => (
                    <SummaryCard 
                        id={post.id}
                        tags={post.tags}
                        imageSrc={post.cover}
                        title={post.title}
                        description={post.description}
                        date={new Date(post.date)}
                        slug={post.slug}
                    />
                ))
                :
                <div class="post-spinner"><ClimbingBoxLoader/><h3>Chargement...</h3></div>
                }
                {/* <SummaryCard 
                imageSrc="https://the-public-domain-review.imgix.net/essays/petrified-waters/caus1620_0034-edit-3.jpg?fit=max&w=1200&h=850"
                title="Le monde touche-t-il a sa fin ?"
                description="Et bien oui, entre crise écologique et à l'aube d'une nouvelle guerre mondiale, seront nous à l'abris de la fin du monde ?"
                date="12 juin 2022"
                >
                </SummaryCard>
                <SummaryCard 
                imageSrc="https://the-public-domain-review.imgix.net/essays/petrified-waters/caus1620_0034-edit-3.jpg?fit=max&w=1200&h=850"
                title="Le monde touche-t-il a sa fin ?"
                description="Et bien oui, entre crise écologique et à l'aube d'une nouvelle guerre mondiale, seront nous à l'abris de la fin du monde ?"
                date="12 juin 2022"
                >
                </SummaryCard>
                <SummaryCard 
                imageSrc="https://the-public-domain-review.imgix.net/essays/petrified-waters/caus1620_0034-edit-3.jpg?fit=max&w=1200&h=850"
                title="Le monde touche-t-il a sa fin ?"
                description="Et bien oui, entre crise écologique et à l'aube d'une nouvelle guerre mondiale, seront nous à l'abris de la fin du monde ?"
                date="12 juin 2022"
                >
                </SummaryCard>
                <SummaryCard 
                imageSrc="https://the-public-domain-review.imgix.net/essays/petrified-waters/caus1620_0034-edit-3.jpg?fit=max&w=1200&h=850"
                title="Le monde touche-t-il a sa fin ?"
                description="Et bien oui, entre crise écologique et à l'aube d'une nouvelle guerre mondiale, seront nous à l'abris de la fin du monde ?"
                date="12 juin 2022"
                >
                </SummaryCard> */}
                
            </section>       
        </div>


    )
}
 
export default CategoryDetails;