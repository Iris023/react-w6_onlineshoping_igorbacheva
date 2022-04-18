function Buttons({choice}) {
    return(
        <div className="marginTop">
            <div className="btn-cont">
                <button className="categoryBtn font" onClick={() => choice("bra")}>Бюстгалтеры</button>
                <button className="categoryBtn font" onClick={() => choice("panties")}>Трусики</button>
                <button className="categoryBtn font" onClick={() => choice("robe")}>Халаты</button>
                <button className="categoryBtn font" onClick={() => choice("pajama")}>Пижамы</button>
                <button className="categoryBtn font" onClick={() => choice("sport")}>Спортивная одежда</button>
            </div>
        </div>
    )
}

export default Buttons;