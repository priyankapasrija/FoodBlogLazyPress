import { Card, CardHeader, Image,Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ title, text, imgUrl, id }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="max-w-[1100px] grid grid-cols-12 grid-rows-2 px-8 mx-10">
      <Card className="col-span-12 sm:col-span-4 h-[300px] w-[300px]"  onClick={handleClick}>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase f5ont-bold" style={{fontFamily:'Montserrat'}}>
            {text}
          </p>
          <h4 className="text-black font-medium text-large" style={{fontFamily:'Barlow Condensed'}}>{title}</h4>
          <Button onClick={handleClick}>🧿Maşallah</Button>
        </CardHeader>
        
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 h-[300px] object-cover"
          src={imgUrl}
        />
      </Card>
    </div>
  );
}
