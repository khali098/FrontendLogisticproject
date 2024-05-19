
const loginFields=[
    {
        labelText:"Email ",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Enter your email"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Enter your password"   
    }
]

const createFields=[
    {
        labelText:"Name*",
        labelFor:"Username",
        id:"namUsernamee",
        name:"Username",
        type:"text",
        autoComplete:"Username",
        isRequired:true,
        placeholder:"Enter your name"   
    },
    {
        labelText:"Email*",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Enter your email"   
    },
    
    {
        labelText:"Password*",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Create a password"   
    }
]

const resetFields=[
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirmPassword",
        id:"confirmPassword",
        name:"confirmPassword",
        type:"password",
        autoComplete:"confirmPassword",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]


const forgotFields=[
  
    {
        labelText:"Email*",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Enter your email"  
    }
]

const verificationFields=[
  
    {
        labelText:"Code",
        labelFor:"code-verification",
        id:"code-verification",
        name:"code",
        type:"text",
        autoComplete:"code",
        isRequired:true,
        placeholder:""   
    }
]



export {loginFields,resetFields,createFields,forgotFields,verificationFields}