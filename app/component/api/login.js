import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Validasi input
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required." });
    }

    try {
      // Cari admin berdasarkan username
      const admin = await prisma.admin.findUnique({ where: { username } });

      if (!admin) {
        return res.status(401).json({ error: "Invalid credentials." });
      }

      // Verifikasi password
      const isValid = await bcrypt.compare(password, admin.password);

      if (!isValid) {
        return res.status(401).json({ error: "Invalid credentials." });
      }

      // Login sukses
      res.status(200).json({ message: "Login successful." });
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
