import axios from "axios";
import useSWR from "swr";

const backend = "http://localhost:24601";

const lazyPress = axios.create({
    baseURL: backend,
});

const fetcher = (url) => lazyPress.get(url).then((res) => res.data);

const useFoodBlog = () => {
    const { data, error, isLoading } = useSWR(
        //aangair
        `/blogs/6558a1e8b9710288a16552e3`,
        //zukofire
        // `/blogs/6556441b88a0c7d18ab01535`,
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
        //aangair
        `/blogs/singlepage/6558a1e8b9710288a16552e3/${pageId}`,
        //zukofire
        // `/blogs/6556441b88a0c7d18ab01535/${pageId}`,
        fetcher
    );
    return {
        recipePage: data,
        isLoading,
        isError: error,
    };
};

export { useFoodBlog, useRecipePage };
