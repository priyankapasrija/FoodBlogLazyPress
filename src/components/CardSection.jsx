// CardSection.jsx
import RecipeCard from './RecipeCard';

export default function CardSection({ cards }) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <RecipeCard key={index} title={card.title} text={card.text} imgUrl={card.imgUrl} />
      ))}
    </div>
  );
}
