import {CDN_URL} from "../utils/constants"

const CardCompo=({resData})=>{

    // const { name, cuisines, avgRating, costForTwo } = resData?.info || {}
    return(
        <>
        <div className="cardContainer">
            <img className="cardImg" src={resData?.info?.cloudinaryImageId} alt="cardImg" />
            <h3 className="cardHead">{resData?.info?.name}</h3>
            <h4 className="cardCusine">{resData?.info?.cuisines}</h4>
            <h4 className="cardRating">{resData?.info?.avgRating}⭐</h4>
            <h4 className="cardPrice">{resData?.info?.costForTwo}</h4>
        </div>
        </>

    )
}

export default CardCompo;