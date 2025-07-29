const Filter = (props) => (
  <div>
    filter shown with<input value={props.filter} onChange={props.eventHandler}/>
  </div>
)


export default Filter