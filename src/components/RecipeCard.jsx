import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({  title,text,imgUrl,button,region,category,pageId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${pageId}`);
  };

  return (
    <Card className="border rounded-none boxShadow mx-5" style={{ borderColor: '#333131' }}>
      <CardHeader className="pb-0 flex-col items-start">
        <h4
          className="font-bold text-large border"
          style={{ backgroundColor: "#F2D1D1", borderColor: '#333131' }}
        >
          {title}
        </h4>
        <div className="flex flex-col items-start mt-2">
          <p className="text-tiny uppercase font-bold">{text}</p>
          <p className="text-tiny uppercase font-bold">{category}</p>
          <p className="text-tiny uppercase font-bold">{region}</p>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-none "
          src={imgUrl}
          style={{
            border: "1px solid #333131",
            width: "17vw",
            height: "20vh",
          }}
        />
      </CardBody>
      <Button
        onClick={handleClick}
        className="button buttonShadow rounded-none p-5 w-[15vw] my-[20px] "
        style={{
          border: "1px solid black",
          backgroundColor: "#DAEAF1",
        }}
      >
        {button}
      </Button>
    </Card>
  );
}
