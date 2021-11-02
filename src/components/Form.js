import React from "react"

class Form extends React.Component {
    constructor() {
        super()
    
        this.state = {
          task: ""
        }

        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleTaskDescriptionChange(e) {
        this.setState({ task: e.target.value })
    }

    handleSubmit(e) {  
        e.preventDefault()
        console.log(this.state.task)
        this.props.addTask(this.state.task)
    }

    render() {
        return (
        <div>
            <form className="form-inline row" onSubmit={this.handleSubmit}>
                <div className="col-6 form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="" 
                        onChange={this.handleTaskDescriptionChange}
                    />
                </div>
                    <button type="submit" className="col-3 btn btn-primary" value="Submit">Ajouter à ma liste</button>
            </form>
        </div>
        )
    }
}

export default Form; 