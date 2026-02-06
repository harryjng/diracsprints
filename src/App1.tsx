import { useState } from 'react'

const initialSteps = [
    {
        id: 1,
        title: "step 1",
        status: "pending",
        instruction: "look around and note obstacles"
    },
    {
        id: 2,
        title: "step 2",
        status: "pending",
        instruction: "turn on the drone"
    },
    {
        id: 3,
        title: "step 3",
        status: "pending",
        instruction: "lift drone to 5 feet in the air"
    },
    {
        id: 4,
        title: "step 4",
        status: "pending",
        instruction: "manuever desired direction"
    },
    {
        id: 5,
        title: "step 5",
        status: "pending",
        instruction: "once reached destination, land the drone downwards"
    },
]

export default function app1() {
    const [steps, setStep] = useState(initialSteps)
    const [activeId, setActiveId] = useState(0)

    // const completeStep (id: number) {

    // }

    return (
        <div>
            <h1>drone instructions</h1>
            {steps.map(step =>
                <div key={step.id} className="border p-4 mb-2">
                    <p>{step.id}</p>
                    <p>{step.title}</p>
                </div>
            )}
        </div>
    )

    //const completestep function
    //updates status
    //assigns newSteps
    //update activeId




    //in return
    //steps.map to display all the steps on load (id, title, status)
    //on click to display step details (instruction, completion button), update status to "in progress", set active id to step.id + 1
    //on completion click






}
