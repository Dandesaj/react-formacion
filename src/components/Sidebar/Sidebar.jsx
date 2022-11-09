import "./Sidebar.css";
import { Link } from 'react-router-dom'

const Sidebar = ({style, tabs=[]}) => {
  return (
    <div className="sidebar">
      <ul>        
        {tabs.map(tab=> 
        <li>
          <button className={style}>
            <Link >{tab}</Link>
          </button>
        </li>)}        
      </ul>
        
    </div>
  );
};

export default Sidebar;
