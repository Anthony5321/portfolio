import { useState } from "react";
import cn from "classnames";

function FlipCard({ card: { id, variant, front, back } }) {
    const [showBack, setShowBack] = useState(false); 
    
    function handleClick() {
        if (variant === "click") {
          setShowBack(!showBack);
        }
      }
    
      function handleFocus() {
        if (variant === "focus") {
          setShowBack(true);
        }
      }
    
      function handleBlur() {
        if (variant === "focus") {
          setShowBack(false);
        }
      }
    
    return (
<div
      tabIndex={id}
      className={cn("flip-card-outer", { hover: variant === "hover" })}
      onClick={handleClick}
    >
      <div className={cn("flip-card-inner", { showBack })}>
        <div
          className="card front"
          style={{
            backgroundImage: `linear-gradient(#00000000, #00000050), url(${front.background})`
          }}
        >
          <div className="card-body position-relative d-flex justify-content-center align-items-center">
            <div className="icon">
            </div>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex flex-column justify-content-around align-items-center">
          <p className="name">{back.name}</p>
          <p className="description">{back.description}</p>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="deployed">{back.deployed}</p>
              <p className="GitHub">{back.GitHub}</p>
              <p className="programs">{back.programs}</p>
            </div>
            <div className="icon">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;