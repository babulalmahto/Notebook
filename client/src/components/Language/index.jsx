import "./style.css";


const Language = ({index,onDelete,onChange,language :{ name , level , ability}}) => {
    return <div>
        <input className="select-opt" type="text" name="name" value={name} onChange={onChange}/>
        <select className="select-opt" name="level" value={level} onChange={onChange}>
            <option value="">Select level</option>
            <option value="level 1">level 1</option>
            <option value="level 2">level 2</option>
            <option value="level 3">level 3</option>
        </select>
        <div>
            <input type="checkbox" checked={ability.includes('read')} name="ability" value="read" onChange={onChange}/>
            <label className="check-list" htmlFor="">Read</label>
            <input type="checkbox" checked={ability.includes('write')} name="ability" value="write" onChange={onChange}/>
            <label className="check-list" htmlFor="">Write</label>
            <input type="checkbox" checked={ability.includes('speak')} name="ability" value="speak" onChange={onChange}/>
            <label className="check-list" htmlFor="">Speak</label>
            <button className="btn-delete" type="button" onClick={onDelete.bind(this,index)}>Delete</button>
        </div>
    </div>
}

export default Language;