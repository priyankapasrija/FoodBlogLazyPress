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

  useEffect(() => {
    
    window.scrollTo({
        top: 700,
        left: 0,
        behavior: "smooth",
    });
}, []); 
  
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
  <InstantSearch searchClient={searchClient} indexName="recipes">
    <div className='mt-5 flex justify-center'>
    <SearchBox 
    placeholder={'Search for recipes'}
    classNames={{
      
      input:'border border-[#333131] pl-2 buttonShadow placeholder:text-slate-300',
      submit:'p-1 border border-[#333131] p-[0.5rem] bg-[#DAEAF1] iconShadow'}}
      />
    </div>
    <CurrentRefinements
      includedAttributes={['region', 'category']}
      classNames={{
        root: 'mt-2 mb-2 ml-[5vw] flex-row flex items-center',
        item: 'bg-white text-[#333131] text-[0.7rem]',
      }}
    />

    <div className="flex flex-col md:flex-row justify-start" style={{width:'100vw'}}>
      <div className="hidden md:block md:flex-row lg:flex-col  md:w-1/5 ml-[5vw] px-1 boxShadow"
            style={{border:'1px solid #333131'}}>
        <h4 style={{fontFamily:'UniSans-Heavy',fontSize:'1rem'}}>Region:</h4>
        <RefinementList showMore={true} attribute="region" />
        <h4 style={{fontFamily:'UniSans-Heavy',fontSize:'1rem'}}>Category:</h4>
        <RefinementList showMore={true} attribute="category"
        classNames={{
          item:'text-[0.3rem]'
        }} />
      </div>
      <div className="flex flex-row flex-wrap">
            <Hits classNames={{
              list:'flex flex-row flex-wrap justify-center items-center',
              item:'w-[20vw] h-[55vh]'
            }}
             hitComponent={CustomHitComponent} />
          </div>
          </div>
          <Pagination  totalPages={25}   classNames={{
        selectedItem:'border bg-black text-white',list:'flex justify-center items-center mb-2',
        item:'border p-2 m-1'}} />
  </InstantSearch>
</>
  )
};

export default CardSection;
