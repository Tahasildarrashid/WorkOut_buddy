import {Workoutcontext} from "../context/Workoutcontext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
  const context = useContext(Workoutcontext)

  if(!context) {
    throw Error('useWorkoutcontext must be used inside an WorkoutsContextProvider')
  }

  return context
}