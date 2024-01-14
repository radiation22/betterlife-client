import { RouterProvider } from "react-router-dom";
import { router } from "./components/Layout/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
