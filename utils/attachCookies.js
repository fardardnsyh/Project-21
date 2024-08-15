const attachCookies = ({ res, token }) => {
  const fiveDays = 5 * 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + fiveDays),
    secure: process.env.NODE_ENV === "production",
  });
};
export default attachCookies;
