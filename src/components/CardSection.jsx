import RecipeCard from './RecipeCard';
import { searchClient } from '../lib/algoliaClient';
import { InstantSearch, SearchBox, CurrentRefinements, Hits, Pagination } from 'react-instantsearch';
import RefinementList from './RefinementList';
import { useState, useEffect } from 'react';
import SkeletonForCard from './SkeletonForCard';

function CustomHitComponent({ hit }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <SkeletonForCard />
      ) : (
        <RecipeCard
          key={crypto.randomUUID()}
          title={hit.title}
          text={hit.text}
          imgUrl={hit.imgUrl}
          button={hit.button}
          region={hit.region}
          category={hit.category}
          pageId={hit._id}
        />
      )}
    </div>
  );
}

const CardSection = () => {
  return (
    <>
      <div className='polka-dot'>
        <InstantSearch searchClient={searchClient} indexName='recipes'>
          <div className='mt-5 mb-3 flex justify-center '>
            <SearchBox
              placeholder={' 🔍 Search for recipes'}
              classNames={{
                input: 'border border-black p-1 placeholder:text-slate-400 items-center flex font-sans w-lg-[20vw] w-md-[40vw] sm:hidden md:hidden lg:flex',
                submit: 'hidden',
              }}
            />
          </div>
          <CurrentRefinements
            includedAttributes={['region', 'category']}
            classNames={{
              root: 'mt-2 mb-2 hidden flex-row items-center sm:none md:none lg:flex',
              item: 'text-black text-[0.7rem]',
            }}
          />

          <div className='flex flex-col md:flex-row justify-start' style={{ width: '95vw' }}>
         
            <div className='hidden sm:none md:none lg:flex lg:flex-col md:w-1/5 ml-8 px-1 bg-white border-1 border-black'>
              <h4 className='m-1' style={{ fontFamily: 'Montserrat', fontSize: '0.8rem' }}>
                Region:
              </h4>
              <RefinementList showMore={true} attribute='region' />
              <h4 className='m-1' style={{ fontFamily: 'Montserrat', fontSize: '0.8rem' }}>
                Category:
              </h4>
              <RefinementList showMore={true} attribute='category' 
              />
            </div>

          
            <div className='flex flex-row flex-wrap'>
              <Hits
                classNames={{
                  list: 'flex flex-row flex-wrap justify-center items-center ml-3 ',
                  item: 'w-full sm:w-1 md:w-1/2 lg:w-1/3 mb-6', 
                }}
                hitComponent={CustomHitComponent}
              />
            </div>
          </div>

       
          <Pagination
            totalPages={25}
            classNames={{
              selectedItem: 'border bg-black text-white',
              list: 'flex justify-center items-center mb-2 mt-2',
              item: 'border p-2 m-1',
            }}
          />
        </InstantSearch>
      </div>
    </>
  );
};

export default CardSection;
