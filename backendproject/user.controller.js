import User from "../models/user.model.js";

export const getUsers = async (req, res ,next) => { //összes felhadzsnaslot
    try {
        const user = await User.find();
        res.status(200).json({success:true, data:user});
    } catch (error) {
        next(error);
    }
};
export const getUser = async( req, res ,next) => { //Id alapjan lekérés
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) {
            const error = new Error("User not found", 404);
            error.status = 404;
            throw error;
        }
        res.status(200).json({success: true, data: user});
    } catch(error){
        next(error);
    };
}