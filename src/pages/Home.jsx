import NavBar from "../components/NavBar";
import HeroBanner from "../components/HeroBanner";
import CardSection from "../components/CardSection";

export default function Home({ data}) {
const { hero, navBar, cards } = data;

  return (
    <>
      <NavBar navBar={navBar} />
      <HeroBanner hero={hero}  />
      <CardSection cards={cards} />
    </>
  );
}
