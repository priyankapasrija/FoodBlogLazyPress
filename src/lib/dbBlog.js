import axios from "axios";
const backend = import.meta.env.VITE_BACKEND;

const getSinglePageContent = async () => {
    try {
      const  {data}  = await axios.get(`${backend}/blogs/6558a1e8b9710288a16552e3`);
      console.log("🟢🤩 Content from all pages are fetched!");
      const {pages} = data;
      const { home } = pages || {};
      const { hero, blogPages, navBar,footer } = home || {};

      console.log('NavBar',navBar);
      console.log("Hero:", hero);
      console.log("BlogPages(cards):", blogPages);
      console.log('Footer',footer);
      

      return data;
    } catch (error) {
      console.error(`🛑🤩 Failed to fetch content from all pages`, error);
    }
  };


  export {
    getSinglePageContent
  }