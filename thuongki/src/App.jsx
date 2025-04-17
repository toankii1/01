// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./components/Dashboard";
import Projects from "./pages/Projects";
import Team from "./pages/Teams";
import Analytics from "./pages/Annalytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/integrations" element={<Integrations />} />
      </Route>
    </Routes>
  );
}

export default App;
