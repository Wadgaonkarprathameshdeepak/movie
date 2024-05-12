import './App.css';
import Movie from './Movie';
import Signup from './Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Signup />}
          />

<Route
            path="/Movie"
            element={<Movie />}
          />
          <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
          
        </Routes>
      </Router>


    </div>
  );
}

export default App;
