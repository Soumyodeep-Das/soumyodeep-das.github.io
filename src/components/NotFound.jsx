// src/components/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200 text-center">
            <h1 className="text-6xl text-red-500">404</h1>
            <p className="text-xl">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-5 text-lg text-blue-500 no-underline">Go back to Home</Link>
        </div>
    );
};

export default NotFound;
