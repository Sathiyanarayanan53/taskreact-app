import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import { useState } from "react";

function App() {
  const initialData = {
    title: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [tableData, setTableData] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const handleDataChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editTask === null) {
      setTableData([...tableData, formData]);
      setFormData(initialData);
    } else {
      const updatedData = [...tableData];
      updatedData[editTask] = formData;
      setTableData(updatedData);
      setEditTask(null);
      setFormData(initialData);
    }
  };

  const handleEdit = (index) => {
    const clickItem = tableData[index];
    setFormData(clickItem);
    setEditTask(index);
  };

  const handleDelete = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home handleDelete={handleDelete} handleEdit={handleEdit} tableData={tableData} />}
        />
        <Route
          path="/task"
          element={<Task handleSubmit={handleSubmit} handleDataChange={handleDataChange} formData={formData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

