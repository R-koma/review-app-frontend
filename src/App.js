import "./App.css";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import ReviewTask from "./components/pages/review/mainarea/ReviewTask";
import Sidebar from "./components/pages/review/sidebar/Sidebar";
import { TaskCards } from "./components/pages/task/TaskCards";
import Topbar from "./topbar/Topbar";

function App() {
  return (
    <Login />
    // <div className="todoList">
    //   <TaskCards />
    // </div>
  );
}

export default App;
