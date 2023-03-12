import { MutationFunction, useMutation } from "@tanstack/react-query"
import { request } from "../utils/axios-util"
import { AxiosRequestConfig } from "axios";
import { mutateData } from "../utils/mutateData";
import { MutateDataParameters_TP, PostedData_TP } from "../types";

type AxiosRequestConfig_withoutURL_TP = Omit<AxiosRequestConfig, 'url'>

// T => response data type
type Args_TP<T> = {
    mutationKey?: [string] | [string, string] | [string, number],
    // values?: any,
    mutationFn: (comingData: MutateDataParameters_TP) => Promise<T | undefined>,
    onSuccess?: (data: T | undefined) => void | undefined,
    onError?: (error: Error) => void,
}


export const useMutate = <T>({ ...args }: Args_TP<T>) => {
    const { 
        mutationKey,
        mutationFn,
        onSuccess,
        onError,
    } = args

    // useQuery infers queryFn return type
    const mutation = useMutation(
        {
            mutationKey,
            mutationFn,
            onSuccess,
            onError,
        })

    return mutation
}