const validation = (values) => {

    let errors={};

    if(!values.firstname){
        errors.firstname="First name is required"
    }
    if(!values.lastname){
        errors.lastname="Last name is required"
    }
    if(!values.message){
        errors.message="Type a message"
    }

    if(!values.email){
        errors.email="Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
    }

    if(!values.password){
        errors.password="Password is required"
    }else if(values.password.length <5){
        errors.password="Password must be more than five character"
    }
    return errors
}

export default validation
