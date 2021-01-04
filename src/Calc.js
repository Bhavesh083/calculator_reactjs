import React,{useState,useEffect,useRef} from 'react'

function Calc() {

const [calci, setCalci] = useState('');  
const inputRef = useRef(null)  
useEffect(() => {
    inputRef.current.selettionStart = inputRef.current.value.length;
   inputRef.current.selettionEnd = inputRef.current.value.length; 
})
const textNumber = (e) => {
    e.preventDefault();
   setCalci(e.target.value)
}
const setNumber = (e) =>{
    e.preventDefault();
    if (calci!=='Enter Again....' ) {
    try{
    setCalci(calci.concat(e.target.name))
    } catch(error){
        setCalci('Enter Again....')
    }
}
inputRef.current.focus();
}
const clearNumber = (e)=>{
    e.preventDefault();
    setCalci(" ")
    inputRef.current.focus();
}
const giveNumber = (e)=>{
    e.preventDefault();
    try{
    setCalci(eval(calci))
}catch(error){
    setCalci('Enter Again....')
   }
}
const delNumber = (e)=>{
    try{
        setCalci(calci.slice(0,-1)) 
    }catch(error){
         setCalci('Enter Again....')
       }
    e.preventDefault(); 
}

return (
        <div className='gridcont'>
            <input className='inp' value={calci} type='text' onChange={(e)=>textNumber(e)} ref={inputRef} />
            <div className='items'>
                 <button name='c' onClick={(e)=>clearNumber(e)} >C</button>
                 <button name='d' onClick={(e)=>delNumber(e)} >D</button>
                 <button id='c' name='+' onClick={(e)=>setNumber(e)} >+</button>
                 <button name='1' onClick={(e)=>setNumber(e)} >1</button>
                 <button name='2' onClick={(e)=>setNumber(e)} >2</button>
                <button name='3' onClick={(e)=>setNumber(e)} >3</button>
                 <button id='c' name='-' onClick={(e)=>setNumber(e)} >-</button>
                 <button name='4' onClick={(e)=>setNumber(e)} >4</button>
                 <button name='5' onClick={(e)=>setNumber(e)} >5</button>
                 <button name='6' onClick={(e)=>setNumber(e)} >6</button>
                 <button id='c' name='*' onClick={(e)=>setNumber(e)} >*</button>
                 <button name='7' onClick={(e)=>setNumber(e)} >7</button>
                 <button name='8' onClick={(e)=>setNumber(e)} >8</button>
                 <button name='9' onClick={(e)=>setNumber(e)} >9</button>
                 <button id='c' name='/' onClick={(e)=>setNumber(e)} >/</button>
                 <button name='.' onClick={(e)=>setNumber(e)} >.</button>
                 <button name='0' onClick={(e)=>setNumber(e)} >0</button>
                 <button name='=' onClick={(e)=>giveNumber(e)} >=</button>
                </div>       
    </div>
    )
}

export default Calc
