import Joi from 'joi';




const validateUsers = {

    validation (newUser){

        const newUserSchema ={
            email: joi.email().required(),
            firstName: joi.string().required,
            lastName: joi.string().required,
            password: joi.password().min(6).max(12).required()
        };
        return Joi.validate(newUser, newUserSchema);
},

};

export default validateUsers;
