import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

  function zero(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0; 
  }; 

  function one(e) { 
    e.preventDefault(); 
    inputRef.current.value = 1; 
  }; 

  function two(e) { 
    e.preventDefault(); 
    inputRef.current.value = 2; 
  }; 

  function three(e) { 
    e.preventDefault(); 
    inputRef.current.value = 3; 
  }; 

  function four(e) { 
    e.preventDefault(); 
    inputRef.current.value = 4; 
  }; 

  function five(e) { 
    e.preventDefault(); 
    inputRef.current.value = 5; 
  }; 

  function six(e) { 
    e.preventDefault(); 
    inputRef.current.value = 6; 
  }; 

  function seven(e) { 
    e.preventDefault(); 
    inputRef.current.value = 7; 
  }; 

  function eight(e) { 
    e.preventDefault(); 
    inputRef.current.value = 8; 
  }; 

  function nine(e) { 
    e.preventDefault(); 
    inputRef.current.value = 9; 
  };  
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));  
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));  
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));  
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
    setResult((prevVal) => prevVal * 0);
  }; 
 
  return ( 
    <div className="App"> 
      <div id = "title"> 
        <h1>Calculator app</h1>
      </div> 
        <form> 
        <p ref={resultRef}> <p>Result: {result}</p>
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <div className="number-buttons">
          <button onClick={zero}>0</button>
          <button onClick={one}>1</button>
          <button onClick={two}>2</button>
          <button onClick={plus}>+</button>
          <button onClick={three}>3</button>
          <button onClick={four}>4</button>
          <button onClick={five}>5</button>
          <button onClick={minus}>-</button>
          <button onClick={six}>6</button>
          <button onClick={seven}>7</button>
          <button onClick={eight}>8</button>
          <button onClick={times}>*</button>
          <button onClick={nine}>9</button>
          <button onClick={divide}>/</button>
        </div>

        {/* <div className="operation-buttons">
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={times}>*</button>
          <button onClick={divide}>/</button>
        </div> */}

        <div className="reset-buttons">
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
