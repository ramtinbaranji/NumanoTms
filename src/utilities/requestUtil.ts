import ApplicationRequest from "./../hooks/useService";

export const flattenRequest = (request: ApplicationRequest | null): string => {
  const dataJSON: any = {};
  if (request?.data) {
    request?.data.forEach((value: any, key: string) => {
      dataJSON[key] = value;
    });
  }

  return `${JSON.stringify(request)}|${JSON.stringify(dataJSON)}|${
    request?.params ? JSON.stringify(request?.params) : ""
  }`;
  // return `${url}${JSON.stringify(dataJSON)}${request?.method == "POST" ? request.cacheKey : ""}`;
};
