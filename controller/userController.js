import { prisma } from "../prisma/client.js";

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
