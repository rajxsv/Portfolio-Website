import { Outlet } from "react-router-dom";
import SidePanel from "./pages/SidePanel";

function App() {
  return (
    <div className="flex justify-evenly" >  
      <SidePanel />
      <Outlet />
    </div>
  );
}

export default App;
