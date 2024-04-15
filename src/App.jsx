import { Outlet } from "react-router-dom";
import SidePanel from "./pages/SidePanel";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SidePanel />
      <Outlet />
    </div>
  );
}

export default App;
