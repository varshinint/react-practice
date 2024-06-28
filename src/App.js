import './App.css';
import About from './Components/About';
import Checkbox from './Components/Checkbox';
import Counter from './Components/Counter';
import FetchData from './Components/FetchData';
import Helloworld from './Components/Helloworld';
import SampleForm from './Components/SampleForm';
import SignUp from './Components/SignUp';
import Timer from './Components/Timer';
import ToDo from './Components/ToDo';
import ToggleMessage from './Components/ToggleMessage';
import UserCard from './Components/UserCard';
import UserProfile from './Components/UserProfile';
import {createBrowserRouter} from 'react-router-dom'

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path: "/login",
    element: <About/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  }
 
])


function App() {
  return (
    <div >
      <Helloworld welcomeMessage={'Good afternoon everyone'}/>
      <Counter/>
      <SampleForm/>
      <ToggleMessage/>
      <UserProfile/>
      <Checkbox/>
      <Timer/>
      <UserCard yourName={'Shobana'} age={25} onGreet={()=> alert(`Good afternoon,`)}/>
      <ToDo/>
      <FetchData/>
     
    </div>
  );
}

export default App;
