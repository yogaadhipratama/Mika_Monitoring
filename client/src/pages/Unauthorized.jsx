import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Cannot Access This Page</h1>
            <p className="text-5xl mb-8">You Are Unauthorized To Access This Page</p>
          <Link to='/' className="btn btn-primary btn-lg">
            <FaHome className="mr-2" />Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;
