const InputWrapper = ({ name, type, placeholder, showError, errorMessage, handleInputChange }: any) => {

    return (
        <div className='mt-2 mb-2'>
            <div className={`p-0.5 rounded mr-1 ${showError ? "bg-theme-red" : "bg-gradient-to-r from-theme-blue to-theme-purple"}`}>
                <input type={type} placeholder={placeholder} className='p-2 rounded w-full text-lg placeholder:text-theme-light-gray' onChange={(e) => handleInputChange(e, name)} />
            </div>
            {showError && <span className='text-theme-red text-xs'>{errorMessage}</span>}
        </div>
    )
}

import React from 'react'

export default InputWrapper