import User from "../models/user.js";

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {    
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.json({ success: false, message: "User already exists" });
    }
    const user = await User.create({
      username,
      email,
      password,
    });
    const token = generateToken(user._id);
    res.json({ success: true, token });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
     const { email, password } = req.body;
     try {       
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = generateToken(user._id);
        res.json({ success: true, token });
      }
      return res.json({ success: false, message: "Invalid email or password" });
     
     } catch (error) {
      res.json({ success: false, message: error.message });
     }
};


// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user =  req.user; // Assuming req.user is set by authentication middleware
    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};