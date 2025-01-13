import { useState } from "react"
function LoginForm()
{
    const [userEmail,setUserEmail] = useState('')
    const [userPassword,setUserPassword] = useState('')

    const [submitResult, setSubmitResult] = useState('')

    function handleSubmit(e)
    {
        e.preventDefault()

        if(userPassword.length <5)
            setSubmitResult("Password length must be atleast 5 characters")
        else if(userPassword=== userEmail)
            setSubmitResult("Password must not be the same as email")
        else
        setSubmitResult("Successful login")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Email Address: 
                <input type="email" value={userEmail} name="userEmail" onChange={(e)=> setUserEmail(e.target.value)}></input>
                </label>
            </div>
            <div>
                <label>Password: 
                <input type="password" value={userPassword} name="userPassword" onChange={(e) => setUserPassword(e.target.value)}></input>
                </label>
            </div>
            <div>
                <input type="submit"></input>
                <p>{submitResult}</p>
            </div>
            </form>
        </div>
    )
}

export default LoginForm