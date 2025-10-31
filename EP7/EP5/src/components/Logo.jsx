import {LOGO_URL} from "../utils/constants"
// import LOGO from "../assets/download.png"

const LogoCompo=()=>{

    return(
        <>

        <div className="logoContainer">

            <img className="logo" src={LOGO_URL}/>
            {/* <img className="logo" src={LOGO}alt="LOGO"/> */}
            <br />
            <h3 className="logoHead">For Foodie</h3>

        </div>
        
        </>
    )

}

export default LogoCompo;