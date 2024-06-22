import Routes from "./src/Routes/Routes";
import { AuthProvider } from "./src/context/AuthContext";

function App() {
  return (
    <AuthProvider>
        <Routes/>
    </AuthProvider>
  );
}

export default App;