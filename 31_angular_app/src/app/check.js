export const Register = async (req, res) => {
    try {
        let { firstName, lastName, username, email, password } = req.body
        if (!username || !email || !password || !firstName || !lastName) {
            return res.status(422).json({
                message: "All fields are required."
            });
        }
        let existingUser = await Profile.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(422).json({
                username: existingUser.username === username ? "Username already exists." : "Username is valid.",
                email: existingUser.email === email ? "Email already exists." : "Email is valid."
            });
        }
        const fullName = `${firstName} ${lastName}`
        let hashPssword = await bcrypt.hash(password, 10)
        let profile = new Profile({ fullName, username, email, password: hashPssword });
        let create = await profile.save();
        if (create) {
            return res.status(200).send({
                message: "User created successfully.",
                user: {
                    id: profile._id,
                    fullName: profile.fullName,
                    email: profile.email,
                    username: profile.username,
                    avatar: `${BASE_URL}/avatar/${profile.avatar}`
                }
            })
        } else {
            return res.status(500).send({ message: "error creating profile" });
        }
    } catch (e) {
        return res.status(500).json({
            message: e.message
        })
    }
}