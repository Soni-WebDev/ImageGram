import User from '../schema/user'

export const findUserByEmail = async (email)=>{
    try {
        const user = await User.findOne({email});
        return user; 
    } catch (error) {
        console.log('something went wrong', error);
        
    }
}

export const findAllUsers = async ()=>{
    try {
        const allUser = await User.find();
        return allUser;
    } catch (error) {
        console.log(error);
        
    }
}