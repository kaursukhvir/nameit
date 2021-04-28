import "../app.css";

const Searchbar = ({ handleInputchange }) => {
  return (
    <div>
      <input
        className="search-name"
        type="text"
        placeholder="Type the keyword"
        onChange={(event) => {
          handleInputchange(event.target.value);
        }}
      />
    </div>
  );
};

export default Searchbar;
