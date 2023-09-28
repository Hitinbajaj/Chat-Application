import './App.css';
import { Route, Routes,BrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage"
import Chatpage from "./pages/Chatpage"
import ChatProvider from './Context/ChatProvider';


function App() {
  return (
      <ChatProvider>
        <div className='App'>
      <Routes>
      <Route exact path="/"  element={<Homepage/>}/>
      <Route exact path="/chats" element={<Chatpage/>} />
      </Routes>
      </div>
    </ChatProvider>
  );
}

export default App;
