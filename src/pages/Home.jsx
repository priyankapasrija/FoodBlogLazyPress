import HeroBanner from "../components/HeroBanner";
import CardSection from "../components/CardSection";
//import NavBar from "../components/NavBar";
//import Footer from "../components/Footer";
import Spinner from '../components/Spinner';
import { useFoodBlog } from "../lib/swr";
import {useEffect} from 'react';
import RecipeQuote from "../components/RecipeQuote";

export default function Home(/*{data}*/) {
    // const { hero, blogPages } = data;
    const { isLoading,foodBlog } = useFoodBlog();
   
    useEffect( () => {
       
    },[foodBlog])

    return (
        <>
        {isLoading
         ?  (<div className="flex items-center justify-center h-screen">
             <Spinner />
             </div>)
         :  ( <div>
              <HeroBanner />
              <RecipeQuote/>
            <CardSection />
             </div>)}
        </>
    );
}
