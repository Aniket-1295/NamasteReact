import {CDN_URL} from "../utils/constants"

const CardCompo=({resData})=>{

    const {name,Cusine,Rating,Prise} =resData
    return(
        <>
        <div className="cardContainer">
            <img className="cardImg" src={CDN_URL} alt="cardImg" />
            <h3 className="cardHead">{name}</h3>
            <h4 className="cardCusine">{Cusine}</h4>
            <h4 className="cardRating">{Rating}⭐</h4>
            <h4 className="cardPrice">{Prise}</h4>
        </div>
        </>

    )
}

export default CardCompo;