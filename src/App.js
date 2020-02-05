import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [valueTxt, setValueTxt] = useState('')

  const [result, setResult] = useState('')

  const handleSubmit = () =>{
    const newArr = valueTxt.split("")
    let arr = newArr

    let result  = 0
    let doLoop = true
    while (doLoop) {
      doLoop = false
      
      const value = parseInt(arr[0]) * parseInt(arr[1])

      const valueString = value.toString()
      arr = valueString.split("")

      result += 1

      if(valueString.length > 1) doLoop = true
    }

    setResult(result)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="col-md-4 offset-md-4">
            <input type="text" placeholder="ex : 52" className="form-control" onChange={(e) => setValueTxt(e.target.value)} value={valueTxt} />
            <button type="button" className="btn btn-primary mt-3" onClick={() => handleSubmit()}>Submit</button>

            <h3 className="mt-4">Result : {result} </h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
