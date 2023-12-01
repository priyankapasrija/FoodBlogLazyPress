import RecipeCard from './RecipeCard';
import { searchClient } from '../lib/algoliaClient';
import { InstantSearch, SearchBox, CurrentRefinements,Hits,Pagination } from 'react-instantsearch';
import RefinementList from './RefinementList';
import {useState,useEffect} from 'react';
import SkeletonForCard from './SkeletonForCard';



function CustomHitComponent ({ hit }) { 
  const [isLoading,setIsLoading] = useState(true);
  
 useEffect (() => {
 setIsLoading(false)
  },[isLoading]);

 {/* useEffect(() => {
    
    window.scrollTo({
        top: 700,
        left: 0,
        behavior: "smooth",
    });
}, []); */}
  
  return(
  <div>
    {isLoading 
    ? (<SkeletonForCard/>)  
    : ( <RecipeCard
      key={crypto.randomUUID()}
      title={hit.title}
      text={hit.text}
      imgUrl={hit.imgUrl}
      button={hit.button}
      region={hit.region}
      category={hit.category}
      pageId={hit._id}
    />) }
  </div>
)}

const CardSection = () => {
 
 
  return ( 
  <>
  <div className='polka-dot'>
  <InstantSearch searchClient={searchClient} indexName="recipes">
    <div className='mt-5 mb-3 flex justify-center'>
    <SearchBox 
    
  placeholder={' 🔍 Search for recipes'}
  classNames={{
    input: 'border border-black p-1 placeholder:text-slate-400 items-center flex font-sans w-[20vw]',
    submit:'hidden'
    
  }}
/>
    </div>
    <CurrentRefinements
      includedAttributes={['region', 'category']}
      classNames={{
        root: 'mt-2 mb-2  flex-row flex items-center',
        item: 'text-black text-[0.7rem]',
      }}
    />

    <div className="flex flex-col md:flex-row justify-start " style={{width:'95vw'}}>
      <div className="hidden md:block md:flex-row lg:flex-col  md:w-1/5 ml-8 px-1 bg-white"
            style={{border:'1px solid black'}}>
        <h4 className='m-1' style={{fontFamily:'Montserrat',fontSize:'0.8rem'}}>Region:</h4>
        <RefinementList showMore={true} attribute="region" />
        <h4 className='m-1'   style={{fontFamily:'Montserrat',fontSize:'0.8rem'}}>Category:</h4>
        <RefinementList showMore={true} attribute="category"
         />
      </div>
      <div className="flex flex-row flex-wrap">
            <Hits classNames={{
              list:'flex flex-row flex-wrap justify-center items-center ml-3',
              item:'w-[25vw] h-[65vh]'
            }}
             hitComponent={CustomHitComponent} />
          </div>
          </div>
          <Pagination  totalPages={25}   classNames={{
        selectedItem:'border bg-black text-white',list:'flex justify-center items-center mb-2 mt-2',
        item:'border p-2 m-1'}} />
  </InstantSearch>
  </div>
  
</>
  )
};

export default CardSection;
