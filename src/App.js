import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react';
function App() {
  const [result, setResult]=useState("0");

 const handleClick=(e)=>{
    setResult(result.concat(e.target.value));

  }
const clearDisplay=(e)=>{
setResult("");
  }

  const calculate=(e)=>{
setResult(eval(result).toString());
  }


  return (
    <div className="App">
    <div className='calc'>
      <input type="text" placeholder='0' id='answer' value={result}></input>
      <input type="button" value='9' className='button' onClick={handleClick}/>
      <input type="button" value='8' className='button' onClick={handleClick}/>
      <input type="button" value='7' className='button' onClick={handleClick}/>
      <input type="button" value='6' className='button' onClick={handleClick}/>
      <input type="button" value='5' className='button' onClick={handleClick}/>
      <input type="button" value='4' className='button' onClick={handleClick}/>
      <input type="button" value='3' className='button' onClick={handleClick}/>
      <input type="button" value='2' className='button' onClick={handleClick}/>
      <input type="button" value='1' className='button' onClick={handleClick}/>
      <input type="button" value='0' className='button' onClick={handleClick}/>
      <input type="button" value='.' className='button' onClick={handleClick}/>
      <input type="button" value='+' className='button' onClick={handleClick}/>
      <input type="button" value='-' className='button' onClick={handleClick}/>
      <input type="button" value='*' className='button' onClick={handleClick}/>
      <input type="button" value='/' className='button' onClick={handleClick}/>
      <input type="button" value='%' className='button' onClick={handleClick}/>
      <input type="button" value='Clear' className='button long' onClick={clearDisplay}/>
      <input type="button" value='=' className='button long' onClick={calculate}/>
    </div>
    </div>
  );
}

export default App;
