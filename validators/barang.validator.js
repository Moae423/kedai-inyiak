import { body, param } from "express-validator";

export const createBarangValidator = [
  body("namaBarang")
    .notEmpty()
    .withMessage("Nama barang harus diisi")
    .isLength({ min: 2, max: 100 })
    .withMessage("Nama barang harus antara 2-100 karakter")
    .trim()
    .escape(),

  body("jenisBarang")
    .notEmpty()
    .withMessage("Jenis barang harus diisi")
    .isLength({ min: 2, max: 50 })
    .withMessage("Jenis barang harus antara 2-50 karakter")
    .trim()
    .escape(),

  body("jmlBarang")
    .notEmpty()
    .withMessage("Jumlah barang wajib diisi")
    .isInt({ min: 1 }) // ✅ Fix: min harus 1, bukan 0
    .withMessage("Jumlah barang minimal 1")
    .trim(),

  body("tglMasuk")
    .notEmpty()
    .withMessage("Tanggal masuk wajib diisi")
    .isISO8601()
    .withMessage("Format tanggal tidak valid (gunakan YYYY-MM-DD)")
    .custom((value) => {
      const date = new Date(value);
      const today = new Date();
      today.setHours(23, 59, 59, 999); // Set ke akhir hari
      if (date > today) {
        throw new Error("Tanggal masuk tidak boleh lebih dari hari ini");
      }
      return true;
    })
    .toDate(),

  body("tglExpired")
    .notEmpty()
    .withMessage("Tanggal expired wajib diisi") // ✅ Fix: pesan error yang benar
    .isISO8601()
    .withMessage("Format tanggal tidak valid (gunakan YYYY-MM-DD)")
    .custom((value, { req }) => {
      const tglExpired = new Date(value);
      const tglMasuk = new Date(req.body.tglMasuk);
      if (tglExpired <= tglMasuk) {
        throw new Error("Tanggal expired harus lebih dari tanggal masuk");
      }
      return true;
    })
    .toDate(),

  body("harga")
    .notEmpty()
    .withMessage("Harga barang wajib diisi")
    .isFloat({ min: 0.01 }) // ✅ Minimal 0.01, tidak boleh 0
    .withMessage("Harga harus angka positif dan tidak boleh 0")
    .custom((value) => {
      if (value > 999999999) {
        throw new Error("Harga terlalu besar (maksimal 999,999,999)");
      }
      return true;
    })
    .trim(),
];

export const deleteBarangValidator = [
  param("id").isInt({ min: 1 }).withMessage("ID barang harus angka"),
];
