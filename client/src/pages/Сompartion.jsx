import React from "react";

function Сompartion() {
  const [img, setImg] = useState([]);
  return (
    <div>
      <input type="file" />
      {img.map((el) => (
        <img src="" alt="" />
      ))}
    </div>
  );
}

export default Сompartion;
