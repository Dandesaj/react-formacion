import "./Sidebar.css";
import { Link } from 'react-router-dom'

const Sidebar = ({tabs=[]}) => {
  return (
    <div className="sidebar">
      <ul>        
        {tabs.map(tab=> 
        <li>
          <Link>{tab}</Link>
        </li>)}        
      </ul>
        
    </div>
  );
};

export default Sidebar;
