import { useState } from "react";
import { Payment_info } from "./Payment_info";

function Delivery(){
    const [showText, setShowText] = useState(false);

    const showTextClick = () => {
        Payment_info.show = !Payment_info.show;
        setShowText(!showText);
    }

    return(
        <div>
            <h2 className="font">Зона доставки</h2>
            <p className="font text">Мы осуществляем доставку во все регионы России. Мы предлагаем два способа доставки: доставка в один из пунктов выдачи заказов и доставка курьерской службой на дом или в офис.</p>

            <h2 className="font">Бесконтактная доставка</h2>
            <p className="font text">Полностью бесконтактная доставка возможна только при предоплаченном заказе на сайте. Курьер свяжется с Вами перед своим приездом и вы можете попросить его оставить Ваш заказ у двери.</p>

            <h2 className="font">Получение заказа</h2>
            <p className="font text">Трек-номер, по которому можно отследить доставку заказа, будет направлен Вам в SMS-уведомлении/электронном письме после того, как заказ будет передан в службу доставки. <br />
            Заказ упаковывается в картонные короба. <br />
            При получении заказа рекомендуем в присутствии представителя курьерской службы проверить целостность коробки и проверить содержимое заказа на предмет соответствия заказу и отсутствие дефектов.</p>

            <h2 className="font">СТОИМОСТЬ ДОСТАВКИ </h2>
            <p className="font text">При заказе от 3 000 р. после применения всех скидок - БЕСПЛАТНО</p>
            <p className="font text">При заказе до 3 000 р. стоимость доставки составит 300 р.</p>

            <h2 className="font">Способы оплаты</h2>
                <p className="font text">{Payment_info.show ? Payment_info.text : Payment_info.text.substring(0, 80) + "..."} <br/>
                <button className="showTextBtn font text" onClick={showTextClick}>{Payment_info.show? 'Скрыть платежную информацию' : 'Показать все способы оплаты'} </button>
                </p>
            
        </div>
    )
}

export default Delivery;