import { AxiosRequestConfig } from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "src/AppContext";
import { Service } from "src/services/configs/Service";
import { flattenRequest } from "src/utilities/requestUtil";
import { LogicalError } from "../entities/logical-error";
import Log from "../services/logger/Log";
import useRequest from "./useRequest";
export default interface ApplicationRequest
  extends Pick<AxiosRequestConfig, "url" | "baseURL" | "method" | "params" | "data"> {
  cacheKey?: number;
  mockData?: any;
}

export const useService = <T>(request: ApplicationRequest | null): Service<T> => {
  const appContext = useContext(Context);
  const [result, setResult] = useState<Service<T>>({
    status: "loading",
  });

  // return mock data in development environment
  if (process.env.NODE_ENV !== "production" && result.status !== "loaded" && request?.mockData != null) {
    setResult({
      status: "loaded",
      payload: request.mockData,
    });
  }
  if (request && request?.url && appContext?.state.impersonated) {
    request = { ...request, params: { ...request?.params, asuser: appContext?.state.impersonatedUserId } };
  }

  const { error, response, isValidating, mutate } = useRequest<T, LogicalError>(
    process.env.NODE_ENV === "production" ? request : null,
  );

  useEffect(() => {
    if (request && result.status !== "loading") {
      setResult({
        status: "loading",
      });
    }

    return () => {
      setResult({
        status: "loading",
      });
    };
  }, [flattenRequest(request), response]);

  if (response && !isValidating && response.status > 199 && response.status < 300 && result.status !== "loaded") {
    setResult({
      status: "loaded",
      payload: response.data,
      mutateService: mutate,
    });
  }

  if (error && !isValidating && result.status !== "error") {
    // toast biz logical error
    if (error.response?.status === 400)
      Log.error(error, "", error.response?.data.responseStatus.message, error.response?.status);
    setResult({
      status: "error",
      error: error,
      errorCode: error.response?.status || 400,
    });
  }

  return result;
};
