import { useState, useEffect,createElement } from 'react';
import Spinner from './Spinner';

export default function CardSection({ data, component}) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <div className="grid grid-cols-5 gap-4">
      {isLoading
        ?(<Spinner/>)
        : (data.map((recipe) => (
            createElement(component, {
              title: recipe.title,
              description: recipe.description,
              photo: recipe.url,
              ...recipe
            })
          )))
      }
    </div>
  );
}