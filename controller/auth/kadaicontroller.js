import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// getAllDataBarang
export const getAllDataBarang = async (req, res) => {
  try {
    const barang = await prisma.barang.findMany();
    res.status(200).json(barang, { message: "Data barang berhasil diambil" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// getSpesificDataBarang
export const getSpesificBarang = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const barang = await prisma.barang.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(barang, { message: "Data barang berhasil diambil" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// createDataBarang
export const createDataBarang = async (req, res) => {
  const { namaBarang, jenisBarang, jmlBarang, tglMasuk, tglExpired, harga } =
    req.body;
  try {
    const barang = await prisma.barang.create({
      data: {
        namaBarang,
        jenisBarang,
        jmlBarang,
        tglMasuk,
        tglExpired,
        harga,
      },
    });
    res
      .status(200)
      .json(barang, { message: "Data barang berhasil ditambahkan" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
