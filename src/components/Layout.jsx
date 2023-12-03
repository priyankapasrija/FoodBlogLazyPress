import Navbar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import UserConsent from "./UserConsent";

export default function Layout(/*{data}*/) {
  // const { navBar, footer } = data ;

  return (
    <div>
      <Navbar /*navBar={navBar}*/ />
      <Outlet />
      <Footer /*footer={footer}*/ />
      <UserConsent />
    </div>
  );
}
