import axios from "axios";

export default async ({ method, url, header = {}, params = {}, data = {} }) => {
  var queryParameter = "";
  for (var param in params) {
    queryParameter += `${param["name"]}=${param["value"]}&`;
  }
  try {
    var result = await axios({
      method: method || "GET",
      url: `${url}${queryParameter.length > 0 ? "?" : ""}${queryParameter}`,
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
      data: data,
    })
      .then((response) => {
        console.log(`${response.config.url} => success response`);
        console.log(response);
        return {
          success: true,
          data: response.data,
        };
      })
      .catch((errorResponse) => {
        console.log(`${errorResponse.config.url} => error response`);
        console.log(errorResponse);
        return {
          success: false,
          error: {
            header: `Network error: ${errorResponse.code}`,
            message: errorResponse.response.data,
          },
        };
      });
    return result;
  } catch (error) {
    console.log("error while trying to make the request");
    console.log(`message: ${error}`);
    return {
      success: false,
      error: {
        header: "Response handling error",
        message: String(error.data),
      },
    };
  }
};
