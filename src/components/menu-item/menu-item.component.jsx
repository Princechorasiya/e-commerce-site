import React from 'react'
import './menu-item.scss'
import { useNavigate,useLocation } from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size,linkUrl }) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  // console.log(pathname);
  // const match = useMatches();
  // console.log(match);
  return (
    <>
      <div className={`${size} menu-item`} onClick={()=>navigate(`${pathname}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  )
}

export default MenuItem;