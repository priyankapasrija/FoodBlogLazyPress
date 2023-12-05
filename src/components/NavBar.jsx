import { Navbar, NavbarContent, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { useFoodBlog } from "../lib/swr";
import {useState} from 'react';



export default function NavBar() {
  const { foodBlog, isLoading } = useFoodBlog();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  

  if (isLoading) return null;

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white flex items-center md:h-[3rem] xs:h-[4rem]"
      style={{
        borderBottom: "1px solid #333131",
      }}
    >
      <NavbarContent className="sm:hidden" justify="center

      " >
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent className="sm:hidden"  >
        <NavbarBrand  > 
          <span >NOODLE AND NOODLE</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 ">
        <div >
          <NavbarBrand>


            <Link href='/' className='text-black xl:ml-[-14vw] lg:ml-[0]'>

            <span >NOODLE AND NOODLE</span>
            </Link>
          </NavbarBrand>
        </div>
      
        {foodBlog.pages.home.navBar.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className={`text-sm uppercase items-center
             `}
              color="foreground"
              href={item.href}
              style={{
                fontFamily: "Montserrat",
                textDecoration: "none",
                color: "#333131",
                display: "flex",
                alignItems: "center",
                fontSize: "0.6rem",
              }}
            >
              <span className="h-3 w-3 bg-white border border-black rounded-full mr-1 hover:bg-black"></span>
              {item.menuItem}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
       
        {foodBlog.pages.home.navBar.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
             className={`text-sm uppercase items-center`}
              color="foreground"
            
              style={{
                fontFamily: "Montserrat",
                textDecoration: "none",
                color: "#333131",
                display: "flex",
                alignItems: "center", 
              }}
            >
              <span className="h-3 w-3 bg-white border border-black rounded-full mr-1 hover:bg-black"></span>
              {item.menuItem}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
