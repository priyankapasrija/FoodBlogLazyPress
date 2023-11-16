import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
} from "@nextui-org/react";
import { SiMinutemailer } from "react-icons/si";

export default function Footer() {
    return (
        <Navbar
            position="static"
            className="py-1 mt-4 border-t-black dark:border-t-white border-t-1"
        >
            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" color="foreground" aria-current="page">
                        Shipping & Returns
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact Us
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Terms & Conditions
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        FAQ
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Privacy Policy
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    // placeholder="vinyl@album.com"
                    label="Sign up for our newsletter"
                    labelPlacement="outside"
                    size="sm"
                    // startContent={<SearchIcon size={18} />}
                    type="text"
                    endContent={<SiMinutemailer />}
                />
            </NavbarContent>
        </Navbar>
    );
}