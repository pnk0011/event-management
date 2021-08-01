import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

const PNKHome = lazy(() => import("./components/pnk/home"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={null}>
          <Route exact path="/" component={PNKHome} />
          {/* <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/search" component={SearchPage} /> */}
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
