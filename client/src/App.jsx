import "./App.css";
import UserContextProvider from "./components/UserProvider/UserProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <div>Hello world</div>
    </UserContextProvider>
  );
}

export default App;
