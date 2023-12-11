export const ShowTask = () => {
    const tasks = [
    {id: 10001, name: "TASK A", time: "time"},
    {id: 10002, name: "TASK B", time: "time"},
    {id: 10003, name: "TASK C", time: "time"}
]
  return (
    <section className="showTask" >
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">3</span>
            </div>
            <button className="clearAll">Clear All</button>
        </div>
        <ul>
            {tasks.map((task) =>(
                <li>
                <p>
                    <span className="name">{task.name}</span>
                    <span className="time">{task.time}</span>
                </p>
                <i className="bi bi-pen"></i>
                <i className="bi bi-trash"></i>
            </li>
            ))}
            

           
        </ul>
    </section>
  )
}


