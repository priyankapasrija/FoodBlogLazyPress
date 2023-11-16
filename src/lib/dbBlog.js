import axios from "axios";
const backend = import.meta.env.VITE_BACKEND;

const getSinglePageContent = async () => {
    try {
      const  {data}  = await axios.get(`${backend}/blogs/6556441b88a0c7d18ab01535`);
      console.log("🟢🤩 Content from all pages are fetched!");
      const {pages} = data;
      const { home } = pages || {};
      const { hero, navBar, cards } = home || {};

      console.log("Hero:", hero);
      console.log("NavBar:", navBar);
      console.log("Cards:", cards);

      return data;
    } catch (error) {
      console.error(`🛑🤩 Failed to fetch content from all pages`, error);
    }
  };
  

  export {
    getSinglePageContent
  }