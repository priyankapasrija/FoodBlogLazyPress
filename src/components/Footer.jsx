import { FaRegCopyright } from "react-icons/fa";
import { useFoodBlog } from "../lib/swr";

export default function Footer() {
    const { foodBlog, isLoading } = useFoodBlog();

    if (!foodBlog) {
        return <div>Footer not found</div>;}

    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="text-white p-6 " style={{ backgroundColor: "#333131" }}>
            <div className="flex gap-12 justify-evenly flex-wrap">
                <div>
                    <h4 className="font-bold hover:text-pink-lavender">
                        PRODUCTS
                    </h4>
                    <ul>
                        <li className="hover:text-pink-lavender">
                            Website Templates
                        </li>
                        <li className="hover:text-pink-lavender">Websites</li>
                        <li className="hover:text-pink-lavender">
                            Email Marketing
                        </li>
                        <li className="hover:text-pink-lavender">
                            Memberships
                        </li>
                        <li className="hover:text-pink-lavender">Pricing</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold hover:text-pink-lavender">
                        CUSTOMER
                    </h4>
                    <ul>
                        <li className="hover:text-pink-lavender">
                            Website Example
                        </li>
                        <li className="hover:text-pink-lavender">Food-blog</li>
                        <li className="hover:text-pink-lavender">
                            Travel-blog
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold hover:text-pink-lavender">
                        COMPANY
                    </h4>
                    <ul>
                        {foodBlog.pages.home.footer.map((item, index) => (
                            <li
                                className="hover:text-pink-lavender"
                                key={index}
                            >
                                {item.footerItem}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold hover:text-pink-lavender">
                        COMMUNITY
                    </h4>
                    <ul>
                        <li className="hover:text-pink-lavender">
                            Help Center
                        </li>
                        <li className="hover:text-pink-lavender">Contact Us</li>
                        <li className="hover:text-pink-lavender">Forum</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold hover:text-pink-lavender">
                        FOLLOW
                    </h4>
                    <ul>
                        <li className="hover:text-pink-lavender">Instagram</li>
                        <li className="hover:text-pink-lavender">LinkedIn</li>
                        <li className="hover:text-pink-lavender">Facebook</li>
                        <li className="hover:text-pink-lavender">Twitter</li>
                    </ul>
                </div>
            </div>
            <p className="flex items-center gap-1 justify-center p-6">
                <FaRegCopyright /> 2023 Food Blog | All Rights Reserved
            </p>
        </div>
    );
}
