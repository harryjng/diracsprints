import { useState } from 'react'

const initialSteps = [
  { id: 1, title: "Step 1", instruction: "Turn on the drone", status: "pending" },
  { id: 2, title: "Step 2", instruction: "Take off", status: "pending" },
  { id: 3, title: "Step 3", instruction: "Reach necessary height", status: "pending" },
  { id: 4, title: "Step 4", instruction: "Look around for obstacles", status: "pending" },
  { id: 5, title: "Step 5", instruction: "Move in all directions", status: "pending" }
];

export default function App() {
  const [steps, setSteps] = useState(initialSteps);
  //initializing steps as all the steps
  const [activeId, setActiveId] = useState(0);
  //intializing active id as index 0

  const completeStep = (id: number) => {
    const nextSteps = steps.map((step) => 
      step.id === id ? { ...step, status: 'completed' } : step
    );
    //maps over the steps array and finds the step with the id as the one passed in. then that step's status is changed 
    //and this new array in memory is assigned to nextsteps

    setSteps(nextSteps);
    //then we set the steps array to the one we modified.

    if (id < steps.length) {
      setActiveId(id + 1);
      //expand the next step if not in the last step
    } else {
      setActiveId(0); 
      // Close all after final step
    }
    //this is for expanding the next step by setting the active id once completed is clicked.
    
  };
  //function for completing a step. takes in id as the input

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Drone Instruction Stepper</h1>
      
      {steps.map((step) => {
        const isActive = step.id === activeId;
        const isCompleted = step.status === 'completed';
        
        // Requirement: Status logic
        // If completed, show "completed". If active (and not completed), show "in-progress". Else "pending".
        const currentStatus = isCompleted ? "completed" : (isActive ? "in-progress" : "pending");

        return (
          <div
            key={step.id}
            onClick={() => !isCompleted && setActiveId(step.id)}
            // Visible box styling: border-2 ensures thickness, border-solid ensures visibility
            className={`p-4 border-2 border-solid rounded-xl transition-all cursor-pointer 
              ${isActive ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-300 bg-white'}
              ${isCompleted ? 'bg-green-50 border-green-500' : ''}
            `}
          >
            <div className="flex justify-between items-center">
              <h3 className={`font-bold ${isCompleted ? 'text-green-700' : 'text-gray-900'}`}>
                {step.id}. {step.title}
              </h3>
              <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase border ${
                currentStatus === 'completed' ? 'bg-green-200 border-green-500 text-green-700' : 
                currentStatus === 'in-progress' ? 'bg-blue-200 border-blue-500 text-blue-700' : 
                'bg-gray-100 border-gray-400 text-gray-500'
              }`}>
                {currentStatus}
              </span>
            </div>

            {isActive && (
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-gray-700 mb-4">{step.instruction}</p>
                {!isCompleted && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card from re-toggling
                      completeStep(step.id);
                    }}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700"
                  >
                    Complete
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
