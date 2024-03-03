import React from 'react'
import { useState } from 'react'
import OtpInput from './OtpInput'

const PhoneOtpLogin = () => {

    const [phoneNumber, setPhoneNumner] = useState("")
    const [showOtpInput, setShowOtpInput] = useState(false)

    const handlePhoneNumber = (event) => {
        setPhoneNumner(event.target.value)
    }

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        // phonr Validations 

        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert('Invalid Phone Number')
            return;
        }

        // shoe otp field 

        setShowOtpInput(true)
    }

    const onOtpSubmit = (otp) => {
        console.log('login successful', otp)
    }

  return (
    <div>
        {!showOtpInput ? (
            <form onSubmit={handlePhoneSubmit}>
                <input
                 type="text" 
                 value={phoneNumber}
                 onChange={handlePhoneNumber}
                 placeholder='Enter Phone Number'
                />

                <button type='submit'>
                    Submit
                </button>
            </form>
        ) : (
            <div>
                <p>Enter OTP sent to {phoneNumber}</p>

                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />

            </div>
        )}
    </div>
  )
}

export default PhoneOtpLogin