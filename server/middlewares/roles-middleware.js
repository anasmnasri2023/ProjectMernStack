const ROLES = {
  ADMIN: "ADMIN",
  PROJECT_MANAGER: "PROJECT MANAGER",
  ENGINEER: "ENGINEER",
};

const inRole =
  (...roles) =>
  (req, res, next) => {
    const role = roles.some((role) => req.user.roles.includes(role));
    if (!role) {
      return res.status(403).json();
    }
    next();
    return {
      inRole,
      ROLES,
    };
  };
