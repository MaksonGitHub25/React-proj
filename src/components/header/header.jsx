import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
        <span className="header-title">Angelika Cosmetics</span>
        <ul>
          <li>
            <Link to="/">Домашняя страница</Link>
          </li>
          <li>
            <Link to="/shop">Ассортимент</Link>
          </li>
          <li>
            <Link to="/aboutus">О Нас</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>  
          </li>
        </ul>
    </div>
  )
}