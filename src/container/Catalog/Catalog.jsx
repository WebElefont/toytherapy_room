import React, {useState} from 'react';
import './Catalog.css'
import images from "../../constants/images";
import {Link} from "react-router-dom";
import Products from "../Products/Products";
import dataForToys from "../../data/data for toys";


const Catalog = () => {
    const [showMore, setShowMore] = useState(8);
    return (
        <div className='app__catalog1'>
            <header className='catalog__Header'>
            <p >* всі іграшки безкоштовні</p>
                <Link to={"/toytherapy_room"} className='catalog__textAndButton-button'>повернутися назад</Link>
            <p>* тому що ми хочемо допомогти</p>
                <img className='catalog__props_cloud1' src={images.catalog__props_cloud1} alt='Хмаринка 1'/>
                <img className='catalog__props_cloud2' src={images.catalog__props_cloud2} alt='Хмаринка 2'/>
                <img className='catalog__props_cloud3' src={images.catalog__props_cloud1} alt='Хмаринка 3'/>
                <img className='catalog__props_cloud4' src={images.catalog__props_cloud2} alt='Хмаринка 4'/>
            </header>
            <div className='catalog_map__products'>
            {dataForToys.slice(0, showMore).map((prop) => (
                <Products key={prop.id} data={prop} />
            ))}
            <p onClick={() => setShowMore((prev) => prev + 8)} className='catalog__toys_moreproducts'>Показати ще</p>
            </div>
        </div>
    );
};

export default Catalog;