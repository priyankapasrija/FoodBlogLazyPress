import { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useFoodBlog } from "../lib/swr";

export default function NavBar() {
  const { foodBlog, isLoading } = useFoodBlog();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isLoading) return null;

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white flex items-center "
      style={{
        borderBottom: "1px solid #333131",
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden">
        <NavbarBrand>
          <span>NOODLE AND NOODLE</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4  w-full">
        <div>
          <NavbarBrand>
            <span>NOODLE AND NOODLE</span>
          </NavbarBrand>
        </div>

        {foodBlog.pages.home.navBar.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="text-sm uppercase items-center"
              color="foreground"
              href={item.href}
              style={{
                fontFamily: "Montserrat",
                textDecoration: "none",
                color: "#333131",
                fontWeight: index === 0 ? "600" : "normal",
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
              className="w-full text-sm uppercase"
              color="foreground"
              href={item.href}
              style={{
                fontFamily: "Montserrat",
                textDecoration: "none",
                color: "#333131",
                fontWeight: index === 0 ? "600" : "normal",
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
