import { Card, CardHeader, Image } from "@nextui-org/react";

export default function RecipeCard({ title, text, imgUrl }) {
  return (
    <div className="max-w-[1100px] grid grid-cols-12 grid-rows-2 px-8 mx-10">
      <Card className="col-span-12 sm:col-span-4 h-[300px] w-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-black/60 uppercase f5ont-bold" style={{fontFamily:'Montserrat'}}>
            {text}
          </p>
          <h4 className="text-black font-medium text-large" style={{fontFamily:'Barlow Condensed'}}>{title}</h4>
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
