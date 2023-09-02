import { RecoilRoot } from "recoil";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Receivevotes from "./pages/Receivevotes";
import VotingBefore from "./pages/VotingBefore";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/recvotes" element={<Receivevotes />} />
              <Route path="/voting" element={<VotingBefore />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

const AppLayout = () => {
  return (
    <>
      <nav className="text-primary-red bg-secondary-blue">
        <h1>Hello JellyHelly</h1>
      </nav>
      <Outlet />
    </>
  );
};

export default App;
