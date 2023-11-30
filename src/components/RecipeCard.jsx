import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { PiForkKnifeFill } from "react-icons/pi";
import {useState, useEffect} from 'react';


export default function RecipeCard({ title,imgUrl,button,region,category,pageId }) {
 
  const navigate = useNavigate();
  const [isDessert,setIsDessert] = useState(true);

  useEffect( ( ) => {
  if (category === 'Dessert') {
    setIsDessert(false)
  }
 
  },[category])


  const handleClick = () => {
    navigate(`/recipe/${pageId}`);
  };

  return (
    <Card className="border rounded-none boxShadow mx-5 bg-[#ffffb7]" style={{ borderColor: '#333131' }}>
      <CardHeader className="flex-col flex-wrap items-start justify-center" style={{height:'12vh'}}>
        <h4 
          style={{fontFamily:'Unisans-Heavy',lineHeight:'1rem'}}>
          {title}
        </h4>
        <div className="flex flex-col items-start"
            >
          <p className="text-tiny flex mb-1 items-center"
              style={{fontWeight:'900'}}>
              <PiForkKnifeFill />
              &nbsp;{region}{" "}Cuisine</p>
              <p className='text-tiny border border-black p-[0.5] px-2
              {{isDessert ? (bg-[#F2D1D1]) : (bg-white)}}'
              style={{fontFamily:'UniSans-Heavy',fontSize:'0.5rem'}}>
              {category}</p>
        </div>
      </CardHeader>
      <CardBody className="overflow-hidden"
      style={{marginTop:'-1.8vh'}}>
        <Image
          alt="Food Image"
          className="object-cover rounded-none mb-2"
          src={imgUrl}
          style={{
            border: "1px solid #333131",
            width: "17vw",
            height: "20vh",
          }}
        />
        <div className="items-end flex flex-col"> 
         <Button
        onClick={handleClick}
        className="button buttonShadow rounded-none mt-[2vh] "
        style={{
          border: "1px solid black",
          backgroundColor: "#DAEAF1",
        }}
      >
        {button}
      </Button></div>
        
      </CardBody>
    
    </Card>
  );
}
