import React from 'react'

const SignIn = () => {
    const[email,]
    return (
        <div className="sign-container">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email}/>
                <input type="password" name="password" value={password}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignIn