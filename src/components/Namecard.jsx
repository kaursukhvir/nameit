import "../app.css";
const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

const Namecard = ({ name }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="card"
      href={nameCheapUrl + name}
    >
      <div>{name}</div>
    </a>
  );
};

export default Namecard;
