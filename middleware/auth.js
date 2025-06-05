import jwt from "jsonwebtoken";

export const authenticationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  //   kalo ga ada token
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(`Token verfication error:`, err.message);
      return res.status(403).json({
        message: "Token tidak valid atau sudah expired",
        success: false,
      });
    }
    req.user = user;
    next();
  });
};
