import useSWR from 'swr';

const baseURL = "http://localhost:3000/api";
const response = (...args) => fetch(...args).then(res => res.json())

const Fetcher = (endpoint) => {

    const {data, error, isLoading } = useSWR(`${baseURL}${endpoint}`, response)

    return {
        data,
        isLoading,
        isError: error
    }
}

export default Fetcher;
