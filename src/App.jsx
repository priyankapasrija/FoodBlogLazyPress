import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from './pages/RecipePage';
import NotFound from './pages/NotFound';
import { useState, useEffect } from "react";
import { getSinglePageContent } from '../src/lib/dbBlog';

export default function App() {
  const [data, setData] = useState({ hero: null, navBar: null, cards: [] });
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSinglePageContent();
        const { home } = result.pages || {};
        const { hero, navBar, cards } = home || {};
        setData({ hero, navBar, cards });
        console.log(hero);
        console.log(navBar);
        console.log(cards)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home data={data} />}
        />
        <Route
        path='/recipe/:_id'
        element={<RecipePage data={data}/>}
        />
        <Route 
        path='*'
        element={<NotFound />} 
        />

      </Routes>
    </>
  );
}
