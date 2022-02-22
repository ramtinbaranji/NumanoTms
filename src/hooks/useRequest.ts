import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import SPRequestConfig from "src/services/configs/requestConfig";
import Log from "src/services/logger/Log";
import useSWR, { ConfigInterface, responseInterface } from "swr";
import { flattenRequest } from "../utilities/requestUtil";
import ApplicationRequest from "./useService";
interface Return<Data, Error>
  extends Pick<
    responseInterface<AxiosResponse<Data>, AxiosError<Error>>,
    "isValidating" | "revalidate" | "error" | "mutate"
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<ConfigInterface<AxiosResponse<Data>, AxiosError<Error>>, "initialData"> {
  initialData?: Data;
}

export default function useRequest<Data = unknown, Error = unknown>(
  request: ApplicationRequest | null,
  { initialData, ...configuration }: Config<Data, Error> = {},
): Return<Data, Error> {
  if (request) {
    request.baseURL = SPRequestConfig.Endpoint;
  }

  const config: Config<Data, Error> = {
    ...configuration,

    onErrorRetry: (error, key, option, revalidate, { retryCount }) => {
      console.log(error);

      if (retryCount) {
        if (retryCount > 3) return;
        if (retryCount > 2)
          Log.error(error, `Api call: ${request?.url}`, "هنگام فراخوانی سرویس مشکلی پیش آمد! لطفا مجددا تلاش کنید");
      }
      setTimeout(() => revalidate({ retryCount: (retryCount || 0) + 1 }), 2000);
    },

    shouldRetryOnError: true,
    revalidateOnReconnect: false,
    revalidateOnFocus: false,
    errorRetryCount: 3,
    dedupingInterval: 0,
    errorRetryInterval: 3000,
  };

  const { data: response, error, isValidating, revalidate, mutate } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && flattenRequest(request), // problem with 0.5.2//
    () => axios(request as AxiosRequestConfig),
    {
      ...config,
      // @ts-ignore
      initialData: initialData && {
        status: 200,
        statusText: "InitialData",
        config: request,
        headers: {},
        data: initialData,
      },
    },
  );
  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    revalidate,
    mutate,
  };
}
