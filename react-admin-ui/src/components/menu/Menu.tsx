import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../data';
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item, index) => (
        <div className="item" key={index}>
          <span className="title">{item.title}</span>

          {item.listItems?.map((listItem,index) => (
            <Link to={listItem.url}className="listItem" key={index}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
