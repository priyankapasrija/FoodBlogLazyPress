import Lottie from "lottie-react";
import Hamburger from '../styles/assets/animation/LoadingBurger.json'; 

export default function Spinner() {
 
  return (
   <div className="flex justify-center items-center h-[100vh] z-50"
   style={{width:'40vw'}}
   speed={15}>
<Lottie animationData={Hamburger}>
</Lottie>
   </div>
  );
}
