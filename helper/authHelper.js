import bcrypt from 'bcrypt'

export const hashPassword=async(password)=>{
    try{
        const saltPassword=10;
        const hashPassword=await bcrypt.hash(password,saltPassword)
        return hashPassword;
    }catch(error){
        console.log(error);
    }

}

export const comparePassword = async (password, hashPassword) => {
    return bcrypt.compare(password, hashPassword);
  };