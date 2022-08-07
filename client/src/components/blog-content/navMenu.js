import React, {useState, useEffect} from 'react';

export default function NavMenu ({setCategory, categories}){

    const [listOfCategories, setListOfCategories] = useState([]);

    useEffect(() => {
        setListOfCategories(categories);
    }, [categories])

    return (
        <ul class="blog-nav-menu">
            <li><h4>Toutes les catégories</h4></li>
            {
            listOfCategories.map((category, key) => (
                <li key={key} className="blog-category-filter" onClick={() => setCategory(category)}>{category}</li>
            ))
            }
        </ul>
    )
}
