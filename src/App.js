// import React from 'react'
// import Todo from './Components/Todo';
// function App() {
//     return (
//         <div>
//             <Todo/>
//         </div>
//     )
// }

// export default App;

//**************************************** */
import Login from "./Components/Login";
import Todo from "./Components/Todo"
import Signup from "./Components/RegisterPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
const App = ()=> {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup/>}></Route>
          <Route path="/" element={<Login/>}></Route>
          {/* <Route path="/logout" element={<Logout/>}></Route> */}
          <Route path="/todo" element={<Todo/>}></Route>
        
         {/* <Route path="/orders" element={<Protected><Orders/></Protected>}></Route> */}

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
