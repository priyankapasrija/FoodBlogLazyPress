import axios from "axios";
import useSWR from "swr";

const backend = "http://localhost:24601";

const lazyPress = axios.create({
    baseURL: backend,
});

const fetcher = (url) => lazyPress.get(url).then((res) => res.data);

const useFoodBlog = () => {
    const { data, error, isLoading } = useSWR(
        `/blogs/6558a1e8b9710288a16552e3`,
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
        `/blogs/6558a1e8b9710288a16552e3/${pageId}`,
        fetcher
    );
    return {
        recipePage: data,
        isLoading,
        isError: error,
    };
};

export { useFoodBlog, useRecipePage };
