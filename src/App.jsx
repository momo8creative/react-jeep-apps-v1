import { Route, Routes } from "react-router-dom";
import DataRoutes from "./datas/DataRoutes";

const App = () => {
  const { data } = DataRoutes();
  return (
    <Routes>
      {data.map(({ list, ...props }, i) => (
        <Route {...props} key={i}>
          {list.map(({ ...props }, i) => (
            <Route {...props} key={i} />
          ))}
        </Route>
      ))}
    </Routes>
  );
};

export default App;
