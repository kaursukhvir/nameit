import "../app.css";
import illustration from "./undraw_Choose_bwbs.png";

const Header = ({ headExpanded }) => {
  return (
    <div>
      <img
        className={`head-img 
      ${headExpanded ? "img-expanded" : "img-contracted"}`}
        src={illustration}
        alt="header-image"
      />
      <h1
        className={`head 
      ${headExpanded ? "head-expanded" : "head-contracted"}`}
      >
        Name it
      </h1>
    </div>
  );
};

export default Header;
