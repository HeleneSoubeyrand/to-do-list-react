import React from "react"

class List extends React.Component {

    render() {
        const { tasks, handleDelete, handleChange } = this.props
        return (
            <div className="container">
                <h2 className="mt-5">List</h2>
                    {tasks.map((task, index) => (
                    <div className="border row py-2" key={index}>
                        <div className="col-6">
                            <p>Description :</p> 
                            <p style={{ fontWeight: "bold", margin: 0 }}>{task.description}</p> 
                        </div>
                        <div className="col-2">
                            <p>Status :</p>
                            <p style={{ fontWeight: "bold", margin: 0 }}>{task.status}</p>
                        </div>
                        <div className="col-4 py-2">
                            <button type="submit" className="btn btn-primary mx-2" onClick={() => handleChange(index)} >Modifier</button>
                            <button type="submit" className="btn btn-primary mx-2" onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </div>
                    ))}
            </div>           
        )
    }
}

export default List 