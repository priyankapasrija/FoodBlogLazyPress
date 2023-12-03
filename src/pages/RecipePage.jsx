import { useRecipePage } from "../lib/swr";
import { Parallax } from "react-scroll-parallax";
import { useParams, Link } from "react-router-dom";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Spinner,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";
import CommentsSection from "../components/CommentsSection";
import ChipMap from "../components/ChipMap";
import { useState } from "react";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
// import { useEffect, useState } from "react";
// import { getSinglePageContent } from "../lib/dbBlog";
// import Comments from "../components/Comments";
//import NavBar from '../components/NavBar';
//import Footer from '../components/Footer';

export default function RecipePage() {
  const { pageId } = useParams();
  // const [theData, setTheData] = useState(null);
  const { recipePage, isLoading } = useRecipePage(pageId);
  const [selected, setSelected] = useState([]);
  const youTubeID = getYouTubeID(`${recipePage?.videoUrl}`);
  document.title = `Food Blog`;

  if (!recipePage) {
    return <div>Recipe not found</div>;
  }

  if (isLoading) return <Spinner />;
  if (!isLoading) document.title = `${recipePage.title} | Food Blog`;
  const chipData = [`${recipePage.category}`, `${recipePage.region}`];
  // console.log(`🍟\n`, chipData);
  // console.log(selected);

  return (
    <>
      <Breadcrumbs className="py-2" style={{ borderBottom: "1px solid black" }}>
        <BreadcrumbItem className="ml-[50px]" style={{ fontSize: "1rem" }}>
          <Link style={{ textDecoration: "none" }} to="/" relative="path">
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>Recipe</BreadcrumbItem>
        <BreadcrumbItem>{recipePage.title}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="relative">
        <img
          src={recipePage.imgUrl}
          alt={recipePage.title}
          className="object-cover -z-10"
          style={{
            width: "100vw",
            height: "60vh",
            borderBottom: "2px solid black",
          }}
        />
        <Parallax speed={30}>
          <div
            className="shadow-hard absolute ml-12 my-[-350px] italic border-2 border-black p-6 w-fit flex justify-center align-middle flex-col bg-card"
            // style={{ backgroundColor: "#feea2e" }}
          >
            <p className="text-6xl font-bold align-middle my-auto">
              {recipePage.title}
            </p>
            <p className="text-2xl align-middle my-auto py-2">
              {recipePage.text}
            </p>
            <div>
              <ChipMap array={chipData} />
            </div>
          </div>
        </Parallax>
      </div>
      <div className="bg-offwhite bg-full w-full font-montserrat font-normal text-lg">
        <div className="flex justify-between mx-auto mb-12 w-10/12">
          <div className="w-2/6 min-h-screen">
            <div className="p-5 pl-0 w-full sticky top-20 pr-11">
              <h1 className="h1 text-5xl mb-2">Ingredients</h1>
              {/* <p className="text-default-500 text-small">
                Selected: {selected.join(", ")}
              </p> */}
              <CheckboxGroup onValueChange={setSelected}>
                <ul className="border-2 border-black p-4 shadow-hard w-full bg-card-yellow mb-4">
                  {recipePage?.ingList.map((ingObj) => { //TODO MAKE RIGHT SIDE ELEMENTS STICKY, TOO
                    // console.log(`${ingObj.ing}\n` ,selected.includes(ingObj.ing));
                    return (
                      <div
                        className="flex justify-between"
                        key={crypto.randomUUID()}
                      > 
                        <Checkbox
                          value={ingObj.ing + ingObj.amount}
                          radius="none"
                          color="default"
                          className={
                            "mb-1 line-through" +
                            (selected.includes(ingObj.ing + ingObj.amount)
                              ? ""
                              : "line-through")
                          }
                          key={ingObj.ing + crypto.randomUUID()}
                        >
                          <p className="font-bold">{`${ingObj.ing}`}</p>
                        </Checkbox>
                        <p
                          className={
                            "mb-1 line-through" +
                            (selected.includes(ingObj.ing + ingObj.amount)
                              ? ""
                              : "line-through")
                          }
                        >{`${ingObj.amount}`}</p>
                      </div>
                    );
                  })}
                </ul>
              </CheckboxGroup>

            </div>
          </div>
          <div className="p-5 w-8/12 pl-12">
            <h1 className="h1 text-5xl">Directions</h1>
            {recipePage?.steps.map((step, i) => {
              return (
                <div key={crypto.randomUUID()}>
                  <h3 className="h3 text-3xl font-barlow-condensed font-bold mt-4"></h3>
                  <p className="font-semibold first-letter:font-bold text-base first-letter:text-2xl">
                    <b>{i + 1}.</b> {step}
                  </p>
                </div>
              );
            })}
            {recipePage.videoUrl && (
              <div className="sticky top-[111px] mb-4 h-fit">
                <h1 className="h1 text-5xl mb-2 mt-4">Video</h1>
                <div className=" shadow-hard w-fit h-fit border-2 border-black mb-4">
                  <YouTube videoId={youTubeID} className="" />
                </div>
              </div>
            )}
          </div>
        </div>

        <hr />
        <div className="w-full bg-dots bg-blueberry/50 py-20 border-b-2 border-b-black bg-fixed">
          <div className="w-10/12 mx-auto bg-card border-2 border-black shadow-hard p-0">
            <div className="w-full bg-stone-100/30 p-6">
              <CommentsSection page={recipePage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* <ul className="border-2 border-black p-4 shadow-hard w-full bg-card mb-4">
  {recipePage?.ingList.map((ingObj) => {
    return (
      <li
        key={crypto.randomUUID()}
        className="flex justify-between mb-1"
        id={crypto.randomUUID()}
      >
        <b>{`${ingObj.ing}`}</b> {`${ingObj.amount}`}
      </li>
    );
  })}
</ul> */
//* Original ingredient list code piece


// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const result = await getSinglePageContent();
//             const { blogPages } = result.pages.home;
//             const recipe = blogPages.find((card) => card._id === _id);

//             if (recipe) {
//                 setTheData(recipe);
//                 console.log("Recipe", recipe);
//             } else {
//                 console.error(`Recipe with _id ${_id} not found.`);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     fetchData();
// }, [_id]);

// if (!theData) {
//     return null;
// }
