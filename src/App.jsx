import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import NotFound from "./pages/NotFound";
// import { useState, useEffect } from "react";
// import { getSinglePageContent } from '../src/lib/dbBlog';
import Layout from "./components/Layout";

export default function App() {
    // const [data, setData] = useState({ hero: [], navBar: [], blogPages: [],footer: [] });

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const result = await getSinglePageContent();
    //       const { home } = result.pages || {};
    //       const { hero, navBar, blogPages, footer } = home || {};
    //       setData({ hero, navBar, blogPages,footer });
    //       console.log('Hero',hero);
    //       console.log('NavBar',navBar);
    //       console.log('Cards',blogPages);
    //       console.log('Footer',footer)
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    //   fetchData();
    // }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout /*data={data}*/ />}>
                    <Route index element={<Home /*data={data}*/ />} />
                    <Route
                        path="/recipe/:pageId"
                        element={<RecipePage /*data={data}*/ />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}
