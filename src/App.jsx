import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import { useState} from "react";

function App() {
  const intialData = {
    title: "",
    description: "",
  }
  const [formData, setFormData] = useState(intialData);
  const [tableData, setTableData] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const handleDataChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
      
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask == null) {
      setTableData([...tableData, formData]);
      setFormData(intialData);
    } else {
      tableData[editTask] = formData;
      setTableData(tableData);
      setEditTask(null);
    }
  };
  const handleEdit=(index)=>{
    const clickItem=tableData[index];
    setFormData(clickItem);
    setEditTask(index);
  }
  const handleDelete=(index)=>{
    tableData.splice(index,1);
    setTableData([...tableData]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  handleDelete={handleDelete} handleEdit={handleEdit} tableData={tableData} />} />
        <Route path="/task" element={<Task handleSubmit={handleSubmit} handleDataChange={handleDataChange} formData={formData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
