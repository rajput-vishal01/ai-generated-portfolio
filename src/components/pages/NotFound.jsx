import { Link } from "react-router-dom";
import ParticleBg from "../ui/ParticleBg";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-primary-light dark:bg-primary-dark">
    <ParticleBg />
    <div className="text-center">
      <h1 className="text-6xl font-display mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link to="/" className="btn-primary inline-flex items-center">
        Return Home
      </Link>
    </div>
  </div>
);

export default NotFound;
