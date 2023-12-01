import { useRecipePage } from "../lib/swr";
import { Parallax } from "react-scroll-parallax";
import { useParams, Link } from "react-router-dom";
import { Breadcrumbs, BreadcrumbItem, Spinner } from "@nextui-org/react";
import CommentsSection from "../components/CommentsSection";
import ChipMap from "../components/ChipMap";
// import { useEffect, useState } from "react";
// import { getSinglePageContent } from "../lib/dbBlog";
// import Comments from "../components/Comments";
//import NavBar from '../components/NavBar';
//import Footer from '../components/Footer';

export default function RecipePage() {
  const { pageId } = useParams();
  // const [theData, setTheData] = useState(null);
  const { recipePage, isLoading } = useRecipePage(pageId);
  document.title = `Food Blog`;

  if (!recipePage) {
    return <div>Recipe not found</div>;
  }

  if (isLoading) return <Spinner />;
  if (!isLoading) document.title = `${recipePage.title} | Food Blog`;
  const chipData = [`${recipePage.category}`, `${recipePage.region}`];
  // console.log(`🍟\n`, chipData);

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
            className="shadow-hard absolute ml-12 my-[-350px] italic border-1 border-black p-6 w-fit flex justify-center align-middle flex-col"
            style={{ backgroundColor: "#feea2e" }}
          >
            <p className="text-6xl font-bold align-middle my-auto">
              {recipePage.title}
            </p>
            <p className="text-xl align-middle my-auto">{recipePage.text}</p>
            <div aria-hidden>
              <ChipMap array={chipData} />
            </div>
          </div>
        </Parallax>
      </div>
      <div className="bg-white bg-fixed w-full font-montserrat font-normal text-lg">
        <div aria-hidden className="flex justify-between ml-4 mr-20">
          <div className="w-2/6 min-h-screen">
            <div aria-hidden className="p-5 w-full sticky top-20 pr-12">
              <h1 className="h1 text-5xl mb-2">Ingredients</h1>
              <ul className="border-2 border-black p-4 shadow-hard w-full bg-white mb-6">
                {recipePage?.ingList.map((ingObj) => {
                  return (
                    <li key={crypto.randomUUID()} className="flex justify-between mb-1">
                      <b>{`${ingObj.ing}`}</b>{" "}{`${ingObj.amount}`}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="p-5 w-8/12 pl-12">
            <h1 className="h1 text-5xl mb-2">Directions</h1>
            {recipePage?.steps.map((step, i) => {
              return (
                <div key={crypto.randomUUID()}>
                  <h3 className="h3 font-barlow-condensed font-bold mt-4 mb-1">
                    Step {i + 1}
                  </h3>
                  <p className="font-normal first-letter:font-semibold first-letter:text-xl">
                    {step}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="mb-6" />
        <div className="w-8/12 mx-auto mb-20">
          <CommentsSection page={recipePage} />
        </div>
      </div>
    </>
  );
}

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
