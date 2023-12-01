import {Navbar,NavbarContent,NavbarItem,Link} from "@nextui-org/react";


import { useFoodBlog } from "../lib/swr";


export default function NavBar() {
    const { foodBlog, isLoading } = useFoodBlog();
    if (isLoading) return <div>Loading</div>;
    return (
        <Navbar
            height='3rem'
            width='100vw'
            className="bg-white flex items-center" 
            isBordered
            style={{
                borderBottom: "1px solid #333131",
            }}
        >
           
            <NavbarContent
                justify='start'
            >
                 <Link
            href='/'
            style={{fontFamily:'Baryton',marginLeft:'-13.5vw'}}
            className='no-underline text-current hidden sm:flex p-0 text-[1.2rem]'
            >
                NOODLE AND NOODLE
                </Link>
            </NavbarContent>
          
  

            <NavbarContent
                className="hidden sm:flex p-0 items-center flex"
                justify="end"
                style={{marginRight:'-10vw'}}
            >
                {foodBlog.pages.home.navBar.map((item, index) => (
                    <NavbarItem key={index} isActive={index === 0}>
                        <Link
                            href={item.href}
                           className="uppercase "
                            style={{
                                fontFamily: "Montserrat",
                                textDecoration: "none",
                                color: "#333131",
                                fontWeight: index === 0 ? "600" : "normal",
                                fontSize:'0.6rem',
                                
                            }}
                        ><div className="items-center flex">
                               <span className="h-3 w-3 bg-white border border-black rounded-full mr-1 hover:bg-black">
                        </span>
                            <p>
                                {item.menuItem}
                                    </p>
                        </div>
                          
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
         
        </Navbar>
    );
}
