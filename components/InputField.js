import React from 'react'

const InputField = ({ type, label, value, className, setSignIn, ...props }) => {
    return (
        <div className="flex flex-col mb-4 space-y-3">
            <label className="px-4 font-semibold text-gray-600">{label}</label>
            <input type={type} value={value} className={`px-4 py-2 bg-gray-100 rounded-full outline-none ${className}`} onClick={setSignIn} {...props} />
        </div>
    )
}

export default InputField
