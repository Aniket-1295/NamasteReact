import LogoCompo from "./Logo";
import SearchCompo from "./Search";
import NavCompo from "./Nav";

const HeaderCompo=({searchText,setSearchText,setSearchButtonClicked})=>{

    return(
        <>
        <nav className="bg-linear-to-r from-white to-gray-50 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto py-2 flex justify-between items-center ">
            <LogoCompo />
           {/* This is called prop drilling  */}
            <SearchCompo searchText={searchText} setSearchText={setSearchText} setSearchButtonClicked={setSearchButtonClicked}  />
            <NavCompo />
        </div>
        </nav>
        </>
    )

}

export default HeaderCompo;