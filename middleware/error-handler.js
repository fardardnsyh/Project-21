import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong, try again later",
  };
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    // defaultError.message = err.message;
    defaultError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = `${Object.keys(
      err.keyValue
    )} field has to be unique`;
  }
  // return res.status(defaultError.statusCode).json({ msg: err });
  return res
    .status(defaultError.statusCode)
    .json({ msg: defaultError.message });
};
export default errorHandlerMiddleware;
