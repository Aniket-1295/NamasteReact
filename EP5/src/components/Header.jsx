import LogoCompo from "./Logo";
import SearchCompo from "./Search";
import NavCompo from "./Nav";

const HeaderCompo=()=>{

    return(
        <>
        <div className="headerContainer">
            <LogoCompo />
            <SearchCompo />
            <NavCompo />
        </div>
        </>
    )

}

export default HeaderCompo;