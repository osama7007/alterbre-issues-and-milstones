import { useQuery } from "@tanstack/react-query"
import { request } from "../utils/axios-util"
import { AxiosRequestConfig } from "axios";

type AxiosRequestConfig_withoutURL_TP = Omit<AxiosRequestConfig, 'url'>

type Args_TP<T> = {
    queryKey: [string] | [string, string] | [string, number],
    endpoint: string,
    select?: (data: T) => T,
    enabled?: boolean,
    onSuccess?: (data: T) => void | undefined,
    onError?: (error: Error) => void,
    axiosOptions?: AxiosRequestConfig_withoutURL_TP
    refetchInterval?: number
}
export const useFetch = <T>({ ...args }: Args_TP<T>) => {
    const { queryKey,
        endpoint,
        select,
        enabled = true,
        onSuccess,
        onError,
        axiosOptions,
        refetchInterval } = args

    // useQuery infers queryFn return type
    const query = useQuery(queryKey,
        {
            queryFn: () => request<T>({ url: endpoint, ...axiosOptions }),
            enabled,
            onSuccess,
            onError,
            select,
            refetchInterval
        })

    return query
}