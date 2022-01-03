import React from 'react'
import InputField from './InputField'

const SignIn = ({ setSignIn, handleForm, error }) => {
    return (
        <div className="max-w-lg px-10 pb-10 m-auto sm:px-20 pt-28">
            <h2 className="mb-8 text-4xl font-semibold">Sign In</h2>
            <form onSubmit={(e) => handleForm("signin", e)}>
                <InputField type="email" label="Email Address *" required />
                <InputField type="password" label="Password" />
                <InputField type="submit" label="" value="SIGN IN" className="text-sm font-semibold text-white transition-all bg-blue-500 cursor-pointer hover:bg-blue-700" />
            </form>
            <div className="font-semibold text-center text-red-600">{error}</div>
            <div className="py-6 text-center">
                <hr className="border-gray-200" />
                <h4 className="relative inline-block font-semibold text-gray-500 bg-white -top-3">OR</h4>
            </div>
            <InputField type="submit" label="" value="CREATE ACCOUNT" className="text-sm font-semibold transition-all border-2 border-black cursor-pointer hover:bg-black hover:text-white" setSignIn={() => setSignIn(false)} />
        </div>
    )
}

export default SignIn
