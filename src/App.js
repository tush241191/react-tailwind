import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Dashboard from './views/Dashboard';
import Index from "./views/Index";
import Task from './views/Task';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
