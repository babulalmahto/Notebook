import { Link } from "react-router-dom"
import './style.css';
const linkOptions = [{
    label : "Profile",
    url_path : "/profile",
    icon : <i className="fa fa-user fa-4x"></i>
},{
    label : "Books",
    url_path : "/books",
    icon : <i className="fa fa-book fa-4x"></i>
},{
    label : "Posts",
    url_path : "/posts",
    icon : <i className="fa fa-image fa-4x"></i>
}]

const SideBar = () => {
    return <div className="sidebar">
        <div>
            {
                linkOptions.map((option,index) => <SidebarOptions key={index} option={option}/>)
            }
        </div>
        <div>
            <Link to='/login' className="text"><h3>Log-out</h3></Link>
        </div>
    </div>
}

const SidebarOptions = ({option : {label,url_path,icon}}) => {
    return <div>
        <Link to={url_path}>
            {icon}
            <p className="icon-p">{label}</p>
        </Link>
    </div>
}

export default SideBar;