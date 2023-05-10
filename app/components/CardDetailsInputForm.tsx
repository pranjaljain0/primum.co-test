import { isCreditCardMonthValid, isCreditCardNumberValid, isCreditCardYearValid } from "../helpers/helper"

import { InputCardDetailsStatus } from "../helpers/interfaces"
import InputWrapper from "./InputWrapper"
import { useState } from "react"

export default function CardDetailsInputForm({ cardDetails, setCardDetails, setCorrectCardDetails }: any) {
    const [showError, setShowError] = useState<InputCardDetailsStatus>({
        Name: false,
        CardNumer: false,
        MM: false,
        YY: false,
        CVV: false
    })

    const handleInputChange = (e: any, type: string) => {
        setCardDetails({
            ...cardDetails, [type]: e.target.value
        })
    }

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        Object.keys(cardDetails).forEach((item) => {
            if (cardDetails[item].length === 0)
                setShowError(prevState => ({ ...prevState, [item]: true }))
            else {
                switch (item) {
                    case "CardNumer":
                        setShowError(prevState => ({ ...prevState, [item]: !isCreditCardNumberValid(cardDetails[item]) }))
                        break;
                    case "MM":
                        setShowError(prevState => ({ ...prevState, [item]: isCreditCardMonthValid(cardDetails[item]) }))
                        break;
                    case "YY":
                        setShowError(prevState => ({ ...prevState, [item]: isCreditCardYearValid(cardDetails[item]) }))
                        break;
                    default:
                        if (isCreditCardNumberValid(cardDetails[item]) && isCreditCardMonthValid(cardDetails[item]) && isCreditCardYearValid(cardDetails[item]) && cardDetails.Name.length != 0) {
                            console.log("all correct")
                            setCorrectCardDetails(true)
                        }

                        setShowError(prevState => ({ ...prevState, [item]: false }))
                        break;
                }
            }
        })
    }

    return (<form className='flex flex-col w-1/2'>
        <label className='text-lg'>CARDHOLDER NAME</label>
        <InputWrapper type="text" placeholder="Jane Doe" name="Name" handleInputChange={handleInputChange} errorMessage="Can&apos;t be blank" showError={showError["Name"]} />
        <label className='text-lg'>CARD NUMBER</label>
        <InputWrapper type="text" placeholder='1234 XXXX XXXX 1234' errorMessage="Wrong format, numbers only" name="CardNumer" handleInputChange={handleInputChange} showError={showError["CardNumer"]} />
        <div className='flex'>
            <div className='flex flex-col flex-1 pr-1'>
                <label>EXP. DATE (MM/YY)</label>
                <div className='flex'>
                    <InputWrapper placeholder='MM' type="text" errorMessage="Invalid input" name="MM" handleInputChange={handleInputChange} showError={showError["MM"]} />
                    <InputWrapper placeholder='YY' type="text" errorMessage="Invalid input" name="YY" handleInputChange={handleInputChange} showError={showError["YY"]} />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <label>CVC</label>
                <InputWrapper placeholder='123' type="password" errorMessage="Can&apos;t be blank" name="CVV" handleInputChange={handleInputChange} showError={showError["CVV"]} />
            </div>
        </div>
        <button className='rounded p-3 bg-theme-violet text-white mt-4' onClick={(e) => { handleOnSubmit(e) }}>Confirm</button>
    </form>)
}