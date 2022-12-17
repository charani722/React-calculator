import React,{useState} from 'react';

const App = () =>{
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }

  return(
    <div>
      <h1>Let's Calculate</h1>
    <div className='main-div'>
      
      <input type="text" name="input" value={input} onChange={handler}/>
      <br />
      
      <div className='result-div'>
        <p>{result}</p></div>
      
     
      

      <button className="buttons" onClick = {()=>{setInput(input+'7')}}>7</button>
      <button className="buttons" onClick = {()=>{setInput(input+'8')}}>8</button>
      <button className="buttons" onClick = {()=>{setInput(input+'9')}}>9</button>
      <button className="buttons-sign" onClick = {()=>{setInput(input+'+')}}>+</button><br />

      
      <button className="buttons" onClick = {()=>{setInput(input+'4')}}>4</button>
      <button className="buttons" onClick = {()=>{setInput(input+'5')}}>5</button>
      <button className="buttons" onClick = {()=>{setInput(input+'6')}}>6</button>
      <button className="buttons-sign" onClick = {()=>{setInput(input+'-')}}>-</button><br />

      <button className="buttons" onClick = {()=>{setInput(input+'1')}}>1</button>
      <button className="buttons" onClick = {()=>{setInput(input+'2')}}>2</button>
      <button className="buttons" onClick = {()=>{setInput(input+'3')}}>3</button>
      <button className="buttons-sign" onClick = {()=>{setInput(input+'*')}}>*</button><br />


      <button className="buttons" onClick = {()=>{setInput(input+'0')}}>0</button>
      <button className="buttons-sign" onClick = {()=>{setInput('');setResult('')}}>C</button>
      <button className="buttons-sign" onClick={() => {setResult(eval(input))}}>=</button>
      <button className="buttons-sign" onClick = {()=>{setInput(input+'/')}}>/</button><br />

       
       
      </div>
    </div>
  )
}

export default App;