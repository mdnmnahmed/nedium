import React,{ useState } from 'react'

const SignIn = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit clicked')
    }
    return (
        <div className="sign-container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignIn