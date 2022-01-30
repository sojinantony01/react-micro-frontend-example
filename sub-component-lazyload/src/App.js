import React, { useState } from 'react'
import FormLoader from './formLoader'
function App(props) {
  const [value, setValue] = React.useState('')
  const [form, setForm] = useState()
  const loadForm = async () => {
      let result = await import(`./forms/${value}`)
      console.log(result)
      setForm(result.default)
  }
  return (
    <div className="">
        <p>
          Lazy component remote
        </p>
        <p>
        {props.name}
        </p>

      <input onBlur={(e)=>setValue(e.target.value)}/>
      <button onClick={loadForm}>Load Form</button>
      {form ? <FormLoader Form={form.Form}/> : ''}
    </div>
  );
}

export default App;
