import React, {useState} from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  let btns = [];
  [ 9, 8, 7, 4, 5, 6, 1, 2, 3, 0, '.', '%'].forEach((x) =>{
     btns.push(<button onClick={(e) => setInput(input + e.target.value)} value={x} key={x} className="btn">{x}</button>);
   })
  return(
    <div className="container">
      <div className="upper-area">
        <h1>{input}</h1>
      </div>

      <div className="symbols-btns">
        <button onClick={(e) => setInput(input + e.target.value)} value="+" className='symbol'>+</button>
        <button onClick={(e) => setInput(input + e.target.value)} value="-" className='symbol'>-</button>
        <button onClick={(e) => setInput(input + e.target.value)} value="*" className='symbol'>*</button>
        <button onClick={(e) => setInput(input + e.target.value)} value="/" className='symbol'>/</button>
        <button onClick={(e) => setInput(String(Math.log(input).toFixed(4)))} value="" className='symbol'>log</button>
        <button onClick={(e) => setInput(String(Math.sin(input).toFixed(4)))} value="" className='symbol'>sin</button>
        <button onClick={(e) => setInput(String(Math.cos(input).toFixed(4)))} value="" className='symbol'>cos</button>
        <button onClick={(e) => setInput(String(Math.tan(input).toFixed(4)))} value="" className='symbol'>tan</button>

      </div>

      <div className="num-btns">
        {btns}
      </div>

      <div className="extra-btns">
        <button className="extras" onClick={() => setInput(input.substr(0, input.length-1)) } >C</button>
        <button className="extras" onClick={() => setInput('')}>AC</button>
        <button onClick={

              (e) => {
                try {
                  //String(eval(input).toFixed(4))
                  setInput(
                    (String(eval(input)).length > 3 && String(eval(input)).includes('.')) ?    String(eval(input).toFixed(4)):  String(eval(input))
                  )

                } catch (e) {
                  console.log(e.message);
                }
              }

          } value="=" className="equals"> = </button>
      </div>

    </div>
  )
}



export default App;
