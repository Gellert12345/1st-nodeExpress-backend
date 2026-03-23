export const errorMiddleware = (req,res) => {
    try {
    let error  = {...err};
    error.message = err.message;
    console.error(err);
    //magoose DB bad object ID errore
        if (err.name === "CastError"){
            const message = "resoiurce not found";
            error = new Error(message);
            error.status = 404;
        }
        //mongoose DB  duplicate key
        if (err.code === 11000) {
            const message = new Error(message);
            error.status = 400;

        }
        if (err.name === "ValidationError") {
            const message = Object.values(err.errors).map(val=> val.message);
            error = new Error(message.join(","));
            error.status = 400;
        }
        res.status(error.statusCode || 500 ).json({success:false,error: error.message || "Server Error"})
    } catch(error) {
        next(error)
    }
};
export default errorMiddleware;
