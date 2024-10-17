const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//for register user

const registerUser = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  try {
    //check all field are fill
    if (!name || !email || !password || !confirmpassword) {
      return res.status(401).json({ message: `plese fill all fields` });
    }

    //check password and confirm password is matched
    if (password !== confirmpassword) {
      return res
        .status(401)
        .json({ message: `Password and confirmpassword is not matched` });
    }

    //check email exist or not
    const checkExist = await prisma.user.findUnique({
      where: { email },
    });
    if (checkExist) {
      return res.status(401).json({ message: `Email is already exist` });
    }

    //bcrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    //asign jwt token
    const token = jwt.sign({ userId: createUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // send response with token
    res.status(200).json({
      message: `User created successfully`,
      token,
      user: {
        id: createUser.id,
        name: createUser.name,
        email: createUser.email,
      },
    });
  } catch (error) {
    console.log(`Internel server error`);
    res.status(500).json({ message: `Internal Server Error` });
  }
};

module.exports = { registerUser };
