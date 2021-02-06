function JeopardyDisplay(props) {
    return (
        <div>
             <div>
          <div>
            <label>Question:</label>
            <br />
            <p>{props.question}</p>
          </div>
          <div>
            <label>Category:</label>
            <p>{props.category}</p>
          </div>
          <div>
            <label>Value:</label>
            <p>{props.value}</p>
          </div>
          <div>
            <label>Score:</label>
            <p>{props.score}</p>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div>
            <label htmlFor="answer">Answer</label>
            <input
                  type="text"
                  name="answer"
                  value={props.answer}
                  onChange={props.handleChange}
                  />

            </div>
            <button>Good Luck!</button>
          </form>
          
        </div>

        </div>
    )
}

export default JeopardyDisplay;