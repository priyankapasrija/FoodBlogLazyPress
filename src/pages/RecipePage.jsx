import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePageContent } from '../lib/dbBlog';
import { Breadcrumbs, BreadcrumbItem, Button } from "@nextui-org/react";
import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';
import {Link} from 'react-router-dom';
//import NavBar from '../components/NavBar';
//import Footer from '../components/Footer';

export default function RecipePage() {
  const { _id } = useParams(); 
  const [theData, setTheData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSinglePageContent();
        const { blogPages } = result.pages.home;
        const recipe = blogPages.find((card) => card._id === _id);

        if (recipe) {
          setTheData(recipe);
          console.log('Recipe',recipe);
        } else {
          console.error(`Recipe with _id ${_id} not found.`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [_id]);

  if (!theData) {
    return null;
  }

  return (
    <>
   
      <Breadcrumbs className='p-2' style={{borderBottom:'1px solid black'}}>
       
        <BreadcrumbItem className='ml-[50px]' style={{ fontSize: '1rem' }}> <Link style={{textDecoration:'none'}}
        to="/" relative="path">Home </Link></BreadcrumbItem>
        <BreadcrumbItem>Recipe</BreadcrumbItem>
        <BreadcrumbItem>
       {theData.title}</BreadcrumbItem>
      </Breadcrumbs>
      <div className='relative'>
      <img src={theData.imgUrl} alt={theData.title} className='object-cover' style={{ width: '100vw', height: '60vh', borderBottom:'1px solid black' }}></img>
      <div>
      <p className='absolute my-[-35px] italic border-1 border-black w-full' style={{ fontSize: '1.5rem', textAlign:'center', backgroundColor:'#feea2e' }}>{theData.title}</p>
      </div>
      </div>
      <div className='flex flex-col justify-center gap-5 items-start ' style={{ width: '100vw',fontFamily:'Montserrat',fontSize:'1.2rem' }}>
        <div className='flex flex-col justify-center items-start p-5'>
          <h1 className='h1' style={{ fontSize: '1rem' }}>List of Ingredients</h1>
          <hr />
          <p className='border border-black p-4 borderShadow'>
            Ground lean (7% fat) beef,<br />
            Large egg,<br />
            Minced onion, <br />
            Fine dried bread crumbs, <br />
            Worcestershire sauce <br />
            Cloves garlic, peeled and minced<br />
            Salt <br />
            Pepper<br />
            Hamburger buns (4 in. wide), split <br />
            Mayonnaise <br />
            Ketchup (1st occurrence)<br />
            Ketchup (2nd occurrence) <br />
            Iceberg lettuce leaves, rinsed <br />
            Firm-ripe tomato, cored and thinly sliced <br />
            Red onion, thin slices <br />
          </p>
        </div>

        <div className='flex flex-col justify-start items-start vl p-5' style={{ width: '30vw' }}>
          <h1 className='h1'>How to Prep?</h1>
          <h3 className='h3' style={{ fontFamily: 'Barlow Condensed', fontSize: '2rem' }}>Step 1</h3>
          <p>
            In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/5 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide.
          </p>
          <h1 className='h3' style={{ fontFamily: 'Barlow Condensed', fontSize: '2rem' }}>Step 2</h1>
          <p>
            In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/5 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide.
          </p>
          <h1 className='h3' style={{ fontFamily: 'Barlow Condensed', fontSize: '2rem' }}>Step 3</h1>
          <p>
            In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/5 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide.
          </p>
          <h1 className='h3' style={{ fontFamily: 'Barlow Condensed', fontSize: '2rem' }}>Step 4</h1>
          <p>
            In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/5 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide.
          </p>
        </div>
      <div>
      <CommentForm />
      <Comments />
        <Button>Share on Twitter</Button>
        <Button>Share on Facebook</Button>
        <Button>Share on Instagram</Button>
      </div>
      </div>
      
  
     
    </>
  );
}
