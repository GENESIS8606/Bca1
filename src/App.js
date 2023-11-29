import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./components/Admin/Student/Student";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path={'/student'} element={<Student method='post'/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
