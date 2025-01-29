import FooterEl from "../FooterEl"
import Navbar from "../NavbarEl"


const LayoutEl=(data)=>{
    return (
        <>
         <Navbar/>
         {data.children}
         <FooterEl/>
        </>
    )
}
export default LayoutEl