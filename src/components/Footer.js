import React from 'react';
import footerStyle from './styling/footerStyle.module.css';

function Footer() {
  return (
    <div className={footerStyle.Footer}>
      <div className={footerStyle.sectionFooter}>
        <div className={footerStyle.sectionBox}>
          <h1>CarShop AB</h1>
          <p>Gustavslundsvägen 151 D <br/>
          167 51, Bromma.</p>
        </div>
        <div className={footerStyle.sectionBox}>
          <h3>Mer om oss:</h3>
        </div>
      </div>
      <p>&copy; Mike &#38; Rolly 2022</p>
    </div>
  )
}

export default Footer