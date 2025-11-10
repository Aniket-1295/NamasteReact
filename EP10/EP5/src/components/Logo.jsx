import {LOGO_URL} from "../utils/constants"
// import LOGO from "../assets/download.png"

const LogoCompo=()=>{

    return(
        <>

        <div className="flex flex-col items-center gap-0.5 ">

            <img className="w-40 " src={LOGO_URL} alt="Logo"/>
            {/* <img className="logo" src={LOGO}alt="LOGO"/> */}
            
            {/* <h3 
            className="logoHead font-bold text-xl text-gray-800">For Foodie</h3> */}

        </div>
        
        </>
    )

}

export default LogoCompo;