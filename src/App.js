import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import DetailsPage from "./pages/DetailsPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Switch>
          <Route path='/about' component={AboutUsPage} />
          <Route path='/categories/:categoryName' component={DetailsPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
