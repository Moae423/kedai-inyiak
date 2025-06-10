import { body } from "express-validator";

export const userValidator = [
  body("email")
    .isEmail()
    .withMessage("Email harus valid")
    .normalizeEmail()
    .trim()
    .escape(),
  body("password")
    .notEmpty()
    .withMessage("Password wajib diisi")
    .isLength({ min: 8 })
    .withMessage("Password minimal 8 karakter")
    .isLength({ max: 32 })
    .withMessage("Password maksimal 32 karakter")
    .trim()
    .escape(),
  body("nama")
    .notEmpty()
    .withMessage("nama harus diisi")
    .isLength({ min: 5 })
    .withMessage("Nama minimal 5 karakter")
    .trim()
    .escape(),
  body("role")
    .notEmpty()
    .withMessage("Role harus diisi")
    .isIn(["admin", "karyawan"])
    .withMessage("Role harus admin atau karyawan")
    .trim()
    .escape(),
  body("umur")
    .notEmpty()
    .withMessage("umur harus diisi")
    .isLength({ min: 2 })
    .withMessage("Nama maksimal 2 karakter")
    .isLength({ max: 3 })
    .withMessage("Umur maksimal 3 karakter")
    .trim()
    .escape(),
];
