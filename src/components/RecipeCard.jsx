import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ title, text, imgUrl, id, button }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${id}`);
    };

    return (
        <Card className="border border-black rounded-none boxShadow m-[40px] ">
            <CardHeader className="pb-0 flex-col items-start">
                <h4
                    className="font-bold text-large border border-black"
                    style={{ backgroundColor: "yellow" }}
                >
                    {title}
                </h4>
                <div className="flex flex-col items-start mt-2">
                    <p className="text-tiny uppercase font-bold">{text}</p>
                    <small className="text-default-500">Calories: 120 cl</small>
                </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-none border border-black"
                    src={imgUrl}
                    style={{
                        border: "1px solid black",
                        width: "30vw",
                        height: "40vh",
                    }}
                />
            </CardBody>
            <Button
                onClick={handleClick}
                className="button buttonShadow rounded-none p-5 w-[15vw] my-[20px] mx-[125px]"
                style={{
                    border: "1px solid black",
                    backgroundColor: "#d7b1bc",
                }}
            >
                {button}
            </Button>
        </Card>
    );
}
