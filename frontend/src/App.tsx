import { RecoilRoot } from "recoil";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Receivevotes from "./pages/Receivevotes";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/recvotes" element={<AppLayout />}>
              <Route index element={<Receivevotes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

const AppLayout = () => {
  return <Outlet />;
};

export default App;
