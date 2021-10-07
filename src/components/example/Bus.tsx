import { Link } from "react-router-dom";

export default function Bus() {
  return (
    <div>
      <h3>Bus</h3>
      <ul>
        <li>
          <Link to="/tacos/bus/count">Count</Link>
        </li>
      </ul>
    </div>
  );
}
