const PersonForm = ({eventHandler, nameHandler, numberHandler}) => (
  <form onSubmit={eventHandler}>
        <div>
          name: <input value={nameHandler.name} onChange={nameHandler.eventHandler}/>
        </div>
        <div>
          number: <input value={numberHandler.name} onChange={numberHandler.eventHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)


export default PersonForm