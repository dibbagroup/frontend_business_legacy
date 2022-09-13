import { useState } from "react"

export const NewEventView = _ => {

    const [step, setStep] = useState(0)

    return (
        <main>
            {step === 0 && <StepOne />}
            {step === 1 && <StepTwo />}
            {step === 2 && <StepThree />}
            
        </main>
    )
}

const StepOne = _ =>{
    return (
        <main>

        </main>
    )
}

const StepTwo = _ =>{
    return (
        <main>

        </main>
    )
}

const StepThree = _ =>{
    return (
        <main>

        </main>
    )
}