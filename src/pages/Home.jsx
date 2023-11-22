import HeroBanner from "../components/HeroBanner";
import CardSection from "../components/CardSection";
//import NavBar from "../components/NavBar";
//import Footer from "../components/Footer";

export default function Home(/*{data}*/) {
    // const { hero, blogPages } = data;

    return (
        <>
            <HeroBanner /*hero={hero}*/ />
            <CardSection /*blogPages={blogPages}*/ />
        </>
    );
}
