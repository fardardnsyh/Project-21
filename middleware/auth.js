import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  // console.log(req.cookies);
  const token = req.cookies.token;
  if (!token) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // console.log(payload);
    const testUser = payload.userId === "642f06ae24978e9d699311bb";
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

export default auth;
