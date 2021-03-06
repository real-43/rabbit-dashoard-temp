import "./App.css";
import SideMenu, { menuItems } from "./components/Navbars/SideMenu";
import Topbar from './components/Navbars/Topbar';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Navbars/Footer";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
      <Topbar />
      <Footer />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}
        </div>
      </Router>
    </div>
  );
}

export default App;
