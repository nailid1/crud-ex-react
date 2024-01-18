import Create from "./components/Create";
import {
  // BrowserRouter,
  // Routes,
  // Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      Component: Create,
    },
    {
      path: "read",
      Component: Read,
    },
    {
      path: "update",
      Component: Update,
    }
  ]);
  return (
    <div className="App">
      {/* <BrowserRouter>
    <Routes>
      <button type="button" className="btn btn-primary">Primary</button>
      <Route exact path="/" element={<Create />} />
      <Route exact path="/read" element={<Read />} />
      <Route exact path="/update" element={<Update />} />
    </Routes>
    </BrowserRouter> */}
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
