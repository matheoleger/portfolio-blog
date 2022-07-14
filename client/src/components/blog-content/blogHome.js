import React from 'react';

import SummaryCard from "./summaryCard";

function BlogHome (){
    return (
        <section class="bloghome-section blog-section" id="bloghome">
            <h1>Scriptoo : Le blog</h1>
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
            </section>

        </section>

    )
}
 
export default BlogHome;