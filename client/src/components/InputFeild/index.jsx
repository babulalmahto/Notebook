import "./style.css";
const InputFeild = ({label,name,onEnterValue,value,...restProps}) => {
    return <div>
        {label && <><label className="label-field" htmlFor={"id" + name}>{label}</label><br/></>}
        <input className="field-input" name={name} {...restProps} value={value} id={"id" + name} onChange={onEnterValue}/>
    </div>
}

export default InputFeild;