import { Link } from "react-router-dom";

export default function nav() {
  return (
    <div>
      {/* navbar */}
      <div>
        <ul className="nav justify-content-center fixed-top p-3 bg-info">
          <li className="nav-item text-white">
            <Link className="nav-link text-white" to={"/"}>
              home
            </Link>
          </li>
          <li className="nav-item ">
          <Link className="nav-link text-white" to={"/food"}>
              Food
            </Link>
          </li>
          <li className="nav-item ">
          <Link className="nav-link text-white" to={"/test"}>
              test
            </Link>
          </li>
        </ul>
      </div>
      {/* slide shere */}
    </div>
  );
}
