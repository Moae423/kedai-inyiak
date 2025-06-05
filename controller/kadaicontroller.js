import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// DATA BARANG
// getAllDataBarang
export const getAllDataBarang = async (req, res) => {
  try {
    const barang = await prisma.barang.findMany();
    res.status(200).json(barang, { message: "Data barang berhasil diambil" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DATA BARANG
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

export const updateDataBarang = async (req, res) => {
  const id = parseInt(req.params.id);
  const { namaBarang, jenisBarang, jmlBarang, tglMasuk, tglExpired, harga } =
    req.body;
  try {
    const barang = await prisma.barang.update({
      where: {
        id,
      },
      data: { namaBarang, jenisBarang, jmlBarang, tglMasuk, tglExpired, harga },
    });
    res.status(200).json(barang, { message: "Data barang berhasil diupdate" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDataBarang = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const barang = await prisma.barang.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(barang, { message: "Data barang berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DATA USER
// getAllDataUser
export const getUser = async (req, res) => {
  try {
    const data = await prisma.user.findMany();
    res
      .status(200)
      .json({ datasuccess: true, message: "Data user berhasil diambil", data });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getUsersByRole = async (req, res) => {
  const { role } = req.query;

  try {
    const users = await prisma.user.findMany({
      where: {
        role,
      },
      select: {
        id: true,
        email: true,
        nama: true,
        umur: true,
        role: true,
      },
    });

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Get users by role error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateuser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nama, umur, role } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        nama,
        umur,
        role,
      },
      select: {
        id: true,
        email: true,
        nama: true,
        umur: true,
        role: true,
        // password tidak di-select
      },
    });

    res.status(200).json({
      success: true,
      message: "Data User berhasil diupdate",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Update user error:", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const users = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(users, { message: "Data User berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
