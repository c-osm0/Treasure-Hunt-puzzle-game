export const createError = (status, message) => {
    const err=new Error();
    err.status=status;
    err.message=message;
    // alert("Sign-in")
    // alert(`Please Sign-in/Sign-up as ${message}`);
    return err;
};

