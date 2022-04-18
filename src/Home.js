import { data } from './data'; 
import { useState } from 'react';
import banner from './banner2.jpeg';
import Buttons from './Buttons';

function Home(){
const [clothes, setClothes] = useState(data);

const chooseCategory = (category) => {
    const chosenClothes = data.filter(element => element.category === category);
    setClothes(chosenClothes);
}

    return(
        <div>
            <img className='banner marginTop' src={banner} alt='banner'/>
            <div className='slogan'>
                <h1 className='font header bold'>Просыпайтесь и сияйте </h1>
                <p className='font info text'>Один из самых популярных бюстгелтеров с совершенной поддержкой. Выбирайте классические модели или модели с изящнями деталями.</p>
            </div>
            <Buttons choice={chooseCategory}/>
            <div className='centered'>
                <button className="categoryBtn font allItemsBtn" onClick={() => setClothes(data)}>Все товары</button>
            </div>
            <div  className="items">
                {clothes.map((element => {
                    const {id, image, description, category, price} = element;
                    return(  
                            <div className='item-card font' key={id}>
                                <img className='item-img' src={image} alt="item"/>
                                <p className='item-descr'>{description}</p>
                                <p className='item-price'>{price} p.</p>
                            </div>
                    )
                }))}
            </div>
        </div>
    )
}

export default Home;