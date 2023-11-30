import RecipeCard from './RecipeCard';
import RecipePagination from './RecipePagination';
import { searchClient } from '../lib/algoliaClient';
import { InstantSearch, SearchBox, CurrentRefinements,Hits } from 'react-instantsearch';
import RefinementList from './RefinementList';
import {useState,useEffect} from 'react';
import SkeletonForCard from './SkeletonForCard';

function CustomHitComponent ({ hit }) { 
  const [isLoading,setIsLoading]= useState(true);

  useEffect (() => {
 setIsLoading(false)
  },[isLoading]);
  
  return(
  <div className="flex flex-row flex-wrap justify-even items-center" style={{width:'100vw'}}>
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
 const [currentPage,setCurrentPage] = useState(1)

 const hitsPerPage = 12; 
 const paginationLimitedTo = 1000;
 const totalHits = 300; 

 const nbPages = Math.min(Math.ceil(totalHits / hitsPerPage), paginationLimitedTo / hitsPerPage);

 
  return ( 
  <>
  <InstantSearch searchClient={searchClient} indexName="recipes">
    <SearchBox 
    classNames={{
      input:'border border-black ml-[5vw] pl-2',
      submit:'p-1'}}
      
      />
    <CurrentRefinements
      includedAttributes={['region', 'tags']}
      classNames={{
        root: 'mt-2 mb-4',
        item: 'bg-white dark:bg-stone-800',
      }}
    />

    <div className="flex flex-col md:flex-row justify-start" style={{width:'80vw'}}>
      <div className="hidden md:block md:flex-row lg:flex-col w-[20vw] md:w-1/5 ml-[5vw]">
        <h4 className="text-xl font-semibold">Region</h4>
        <RefinementList showMore={true} attribute="region" />
        <h4 className="text-xl font-semibold">Tags</h4>
        <RefinementList showMore={true} attribute="tags" />
      </div>
      <div className="flex flex-row flex-wrap">
            <Hits classNames={{
              list:'flex flex-row flex-wrap justify-even items-center w-[60vw]',
              item:'w-[20vw] h-[50vh]'
            }}
             hitComponent={CustomHitComponent} />
          </div>


          </div>
    <RecipePagination nbPages={nbPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
  </InstantSearch>
</>
  )
};

export default CardSection;
