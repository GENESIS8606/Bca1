import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./components/Admin/Student/Student";
import Studentview from "./components/Admin/Student/Studentview";
import Studentedit from "./components/Admin/Student/Studentedit";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path={'/student'} element={<Student method='post'/>}></Route>
      <Route path={'/studentview'} element={<Studentview method='get'/>}></Route>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
