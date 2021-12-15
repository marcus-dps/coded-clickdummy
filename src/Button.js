import { Link } from "react-router-dom";

const debug = false;

export default function Button({ x, y, w, h, to }) {
  return (
    <Link
      className={`Button ${debug ? "debug" : ""}`}
      to={to}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${w}px`,
        height: `${h}px`
      }}
    >
      {debug ? to : ""}
    </Link>
  );
}
