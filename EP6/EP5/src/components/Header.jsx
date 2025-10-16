import LogoCompo from "./Logo";
import SearchCompo from "./Search";
import NavCompo from "./Nav";

const HeaderCompo=({searchText,setSearchText,setSearchButtonClicked})=>{

    return(
        <>
        <div className="headerContainer">
            <LogoCompo />
           {/* This is called prop drilling  */}
            <SearchCompo searchText={searchText} setSearchText={setSearchText} setSearchButtonClicked={setSearchButtonClicked}  />
            <NavCompo />
        </div>
        </>
    )

}

export default HeaderCompo;