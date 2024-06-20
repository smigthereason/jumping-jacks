import { FaPowerOff } from "react-icons/fa";
// import { useHistory } from "react-router-dom";

const Tag = () => {
//   const history = useHistory();

  const handleClick = () => {
    history.push("/"); 
  };

  return (
    <div className="tag">
      <button className="power-off-button" onClick={handleClick}>
        <FaPowerOff />
      </button>
    </div>
  );
};

export default Tag;
