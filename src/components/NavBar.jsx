import {Navbar,NavbarContent,NavbarItem,Link} from "@nextui-org/react";
import {DropdownItem,DropdownTrigger,Dropdown,DropdownMenu,Avatar} from "@nextui-org/react";

import { useFoodBlog } from "../lib/swr";


export default function NavBar(/*{navBar}*/) {
    const { foodBlog, isLoading } = useFoodBlog();
    if (isLoading) return <div>Loading</div>;
    return (
        <Navbar
            isBordered
            style={{
                borderBottom: "1px solid #333131",
                backgroundColor: "#FFE6E6",
            }}
        >
            <NavbarContent
                className="hidden sm:flex"
                style={{ marginLeft: "-19vw" }}
            >
                {foodBlog.pages.home.navBar.map((item, index) => (
                    <NavbarItem key={index} isActive={index === 0}>
                        <Link
                            href={item.href}
                            className="px-2"
                            style={{
                                marginLeft: "-1vw",
                                borderRight: "1px solid #333131",
                                textDecoration: "none",
                                color: "#333131",
                                fontWeight: index === 0 ? "900" : "200",
                                fontSize:'0.8rem'
                            }}
                        >
                            {item.menuItem}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="center">
               
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform border border-[#333131] buttonShadow"
                            style={{ borderRadius: "0" }}
                            name="Jason Hughes"
                            size="sm"
                            src="https://cdn-icons-png.flaticon.com/512/189/189001.png"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">
                            Team Settings
                        </DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">
                            Configurations
                        </DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
