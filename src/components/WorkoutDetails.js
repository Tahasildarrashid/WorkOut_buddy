const WorkoutDetails = ({ workout }) => {

  const handleClick = async () =>{
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE'
      })
      const json = await response.json()

      if(response.ok)
      {
        alert(`${workout.title} was deleted`)
      }
  }

  const updateClick = ()=>{
    alert("Cannot update at the moment!")
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      {/* <p>{workout.createdAt}</p> */}
      <span className="btn1" onClick={handleClick}>
            delete
      </span>
      <button className="btn2" onClick={ updateClick }>
            Edit
      </button>

    </div>
  )
}

export default WorkoutDetails