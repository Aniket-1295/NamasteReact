import {LOGO_URL} from "../utils/constants"
const LogoCompo=()=>{

    return(
        <>

        <div className="logoContainer">

            <img className="logo" src={LOGO_URL}/>
            <h3 className="logoHead">For Foodie</h3>

        </div>
        
        </>
    )

}

export default LogoCompo;