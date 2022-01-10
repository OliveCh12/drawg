import React from "react";

// Icons
import { GiSeaDragon } from "react-icons/gi";
import { FaGithubSquare } from "react-icons/fa";

interface Props {
  total: number;
}

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header__title">
        <GiSeaDragon />
        <h1>Dragon Grid</h1>
      </div>
      <span>
        <small>Total : {props.total}</small>
      </span>
      <div className="header__links-group">
        {/* <a href="">About</a> */}
        <a href="https://github.com/OliveCh12/drawg" target={"_blank"} rel="noreferrer">
          <FaGithubSquare size={20}/>
        </a>
      </div>
    </header>
  );
};

export default Header;
