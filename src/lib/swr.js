import axios from "axios";
import useSWR from "swr";

// const backend = "http://localhost:24601";

let backend;
backend = import.meta.env.DEV
    ? import.meta.env.VITE_BACKEND_DEV
    : import.meta.env.VITE_BACKEND_DEPLOY;

const lazyPress = axios.create({
    baseURL: backend,
});

const fetcher = (url) => lazyPress.get(url).then((res) => res.data);

const useFoodBlog = () => {
    const { data, error, isLoading } = useSWR(
        //aangair
        //`/blogs/6558a1e8b9710288a16552e3`,
        //zukofire
        //`/blogs/6556441b88a0c7d18ab01535`,
        //irohfire
        `/blogs/655f85cd7ffa12f0ffb3c23c`,
        fetcher
    );
    return {
        foodBlog: data,
        isLoading,
        isError: error,
    };
};

const useRecipePage = (pageId) => {
    const { data, error, isLoading } = useSWR(
       //algolia
        `/recipes/${pageId}`,
        //irohfire
        //`/blogs/655f85cd7ffa12f0ffb3c23c/${pageId}`,
        fetcher
    );
    return {
        recipePage: data,
        isLoading,
        isError: error,
    };
};

export { useFoodBlog, useRecipePage };
