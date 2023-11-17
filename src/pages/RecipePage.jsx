import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePageContent } from '../lib/dbBlog';
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import AccordionCom from '../components/AccordionCom';
import TableCom from '../components/TableCom';

export default function RecipePage() {
  const { _id } = useParams(); 
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSinglePageContent();
        const { cards } = result.pages.home;
        const recipe = cards.find((card) => card._id === _id);

        if (recipe) {
          setData(recipe);
          console.log(recipe);
        } else {
          console.error(`Recipe with _id ${_id} not found.`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [_id]);

  if (!data) {
    return null;
  }

  return (
    <>
      <Breadcrumbs>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Recipe</BreadcrumbItem>
      <BreadcrumbItem>{data.title}</BreadcrumbItem>
    </Breadcrumbs>
      <img src={data.recipeUrl} alt={data.title} className='object-cover' style={{width:'100vw',height:'50vh'}}></img>
      <p>{data.text}</p>
      <TableCom/>
      <AccordionCom />
    </>
  );
}
