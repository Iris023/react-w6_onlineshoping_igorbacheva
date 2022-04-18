import { photosFromTheShow } from "./photosFromTheShow";
import { useState } from "react";
import next from './next.png';
import prev from './prev.png';

function Show () {
    const [showPic, setShowPic] = useState(0);
    const {id, image} = photosFromTheShow[showPic];
    const [hiddenText, setHiddenText] = useState(true);

    const nextSlide = () => {
        setShowPic((slide => {
            slide ++;
            if (slide > photosFromTheShow.length -1) {
                slide = 0;
            }
            return slide;
        }))
    }

    const prevSlide = () => {
        setShowPic((slide => {
            slide --;
            if (slide < 0) {
                return photosFromTheShow.length -1;
            }
            return slide;
        }))
    }

    const moreAboutTheShow = () => {
    }

    return (
        <div>
            <h1 className="font">Victoria’s Secret Fashion Show</h1>
            <p className="font text">Это ежегодный показ моды, проводимый Victoria's Secret, компанией по продаже женского нижнего белья. <br /> Последний показ шоу состоялся в 2018 году. Больше показов не проводилось, было принято решение отменить их из-за снижение рейтинга и популярности шоу.</p>
            <div className="centered marginTop">
                <button className="sliderBtn" onClick={prevSlide}>
                    <img src={prev} className="sliderArrow"/>
                </button>
                <img src={image} className="vsShowPic"/>
                <button className="sliderBtn" onClick={nextSlide}>
                    <img src={next} className="sliderArrow"/>
                </button>
            </div>
            <div className="centered marginTop">
                <button className="font marginTop" onClick={moreAboutTheShow}>Узнать больше о шоу</button>
            </div>
            <div className="hiddenCont">
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default Show;