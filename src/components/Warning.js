import './Warning.css'

function Warning(props) {

  return (
    <div id='warning' onClick={() => props.setFlag(false)}>
      <h2>WARNING:</h2>
      <h3>This app displays flashing images</h3>
      <h3>Flashing imagery may cause discomfort and/or trigger seizures for people with photosensitive epilepsy</h3>
      <h3>Click to proceed</h3>
    </div>
  )
}

export default Warning