const jwt = require("jsonwebtoken");

/**
@name protect
@description 
1. Protect routes by verifying token 
2. Purpose: Allow only authenticated users to access protected APIs
 **/
async function protect(req, res, next) {
 
    // Get token from cookies or headers
    const token = req.cookies.token || req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Not authorized" });
    }

    try {
        // Verify token
        // Purpose: Ensure request is from valid user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user info to request
        // Purpose: Use user ID in next operations
        req.user = decoded;

        next();

    } catch (error) {
        res.status(401).json({ message: "Token invalid" });
    }
}

module.exports = {protect}