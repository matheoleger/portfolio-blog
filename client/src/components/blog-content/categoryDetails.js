import React from 'react';

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
    return (
        <div>
            <h2>Derniers articles</h2>
            <section class="bloghome-summarycard-list">
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
                </SummaryCard>
                <SummaryCard 
                imageSrc="https://the-public-domain-review.imgix.net/essays/petrified-waters/caus1620_0034-edit-3.jpg?fit=max&w=1200&h=850"
                title="Le monde touche-t-il a sa fin ?"
                description="Et bien oui, entre crise écologique et à l'aube d'une nouvelle guerre mondiale, seront nous à l'abris de la fin du monde ?"
                date="12 juin 2022"
                >
                </SummaryCard>
                
            </section>       
        </div>


    )
}
 
export default CategoryDetails;