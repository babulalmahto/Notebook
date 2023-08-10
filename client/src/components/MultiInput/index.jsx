import { useState } from 'react';
import "./style.css";

const MultiInput = ({name,max = Infinity,onAction = () => {},selectedValue = []}) => {
    const [value,setValue] = useState("");
    return <div>
        {
            selectedValue.length > 0 && <div>
                {
                    selectedValue.map( value => {
                        return <button className='add-rem' type='button' onClick={() => {
                            onAction(name,{ type : "remove" , payload : value })
                        }}>{value}</button>
                    })
                }
            </div>
        }
        <div>
            <input className='field-list' value={value} onChange={({target : {value}}) => setValue(value)}
            type="text"/>
            <button 
            type='button'
            className='add-btn'
            onClick={() => {
                if(value) onAction(name,{ type : "insert" , payload : value})
                setValue("");
                }}>ADD</button>
        </div>
    </div>
}

export default MultiInput;