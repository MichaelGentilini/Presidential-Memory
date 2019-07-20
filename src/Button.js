import React from "react";
import "./index.css";
import { Button } from "reactstrap";

function Buttons(props) {
  const { href, id, updateClick } = props;
  return (
    <div className="mx-auto">
      <div>
        <Button
          onClick={e => {
            updateClick(id);
          }}
          className="btn m-3 img-btn"
          id={id}
          style={{
            backgroundImage: `url(${href})`,
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
}
export default Buttons;
