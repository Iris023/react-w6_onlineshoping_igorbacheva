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
        setHiddenText(false);
    }

    const hideTheInfo = () => {
        setHiddenText (true);
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
                <button className={hiddenText ? 'font marginTop showMoreBtn' : 'hidden'} onClick={moreAboutTheShow}>Узнать больше о шоу</button>
            </div>
            <div className={hiddenText ? 'hidden' : 'marginTop'}>
                <h1 className="font">История шоу</h1>
                <p className="font text marginTop">Бренд Victoria’s Secret с конца 1990-х до 2018 года использовал показ, чтобы прорекламировать и продать свои товары в высших кругах. В шоу принимали участие одни из самых популярных моделей в мире, такие как действующие до лета 2021 года, так называемые «Ангелы» Victoria’s Secret Бехати Принслу, Лили Олдридж, Тейлор Хилл, Эльза Хоск, Марта Хант, Стелла Максвелл, Сара Сампайо, Роми Страйд, Жасмин Тукс, Жозефин Скривер, Лаис Рибейро, Барбара Палвин. <br/>
                    Американское телевидение транслировало показы шоу во время прайм-тайм. Несколько первых показов в 1990-е запускались перед днём святого Валентина, чтобы прорекламировать товар к этому празднику. Ранние показы не транслировались по национальному телевидению. В 1999 и 2000 году были интернет-трансляции. С 2001 года шоу были перенесены в предрождественский период. Также, в 2001 году шоу транслировалось телевизионным каналом ABC, хотя все последующие годы, этим занимался телеканал CBS. Шоу проводилось во многих местах в различных городах, включая Майами, Лос-Анджелес и Канны. Первые четыре показа проводились в отеле «Плаза» в Нью-Йорке, но после того, как шоу стало транслироваться по телевидению, оно стало чаще всего проводиться в Lexington Avenue Armory в Нью-Йорке.<br/>
                    Показ Victoria’s Secret являлся большим событием, где показывали нижнее бельё сложного дизайна, принимали участие одни из самых лучших артистов, и всё это сопровождалось яркими декорациями, которые были тщательно подобраны к темам в показе. Эти показы ежегодно привлекали сотни знаменитостей и артистов, со специальными выступлениями и различными сценками. Каждый год из лучших в мире моделей выбирали от 20 до 40 участниц показа. Показ включал в себя также около десятка моделей, заключивших контракт с компанией, и известных как «Ангелы» Victroria’s Secret (англ. Victoria's Secret Angels), которые помогали сделать шоу ещё более важным событием. Гигантские ангельские крылья, которые надевали модели, а также другие крылья, различных форм и размеров, такие как у бабочки, павлина или дьявольские крылья, стали символом бренда Victoria’s Secret.</p>
                <div className="centered marginTop">
                    <button onClick={hideTheInfo} className={hiddenText ? 'hidden' : 'showMoreBtn'}>Скрыть информацию</button>
                </div>
            </div>
        </div>
    )
}

export default Show;