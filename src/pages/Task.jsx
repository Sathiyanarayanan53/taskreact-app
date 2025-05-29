import React from 'react'
import { Link } from 'react-router-dom';


const Task = ({ handleSubmit, handleDataChange, formData }) => {


    return (
        <>

            <nav className='bg-red-500 text-white p-6 text-center text-xl'>
                <Link to="/">Home</Link> <span>|</span> <Link to="/task">Create a Task</Link>
            </nav>
            <form action="" className='flex flex-col  items-center  my-12 text-xl' onSubmit={handleSubmit} >
                <h1>MEMO THE TASK</h1>
                <table cellPadding={4} cellSpacing={2} className='my-4 '>
                    <tbody>
                        <tr>
                            <td>Task : </td>
                            <td> <input type="text" placeholder='Enter The Task' className='px-2' value={formData.title} onChange={(e) => {
                                const { value } = e.target;
                                handleDataChange("title", value);
                            }} /> </td>
                        </tr>
                        <tr>
                            <td className='flex  '>Description : </td>
                            <td> <input type="text" name="" id="" placeholder='Enter The Description' className='px-2 pb-16 ' value={formData.description} onChange={(e) => {
                                const { value } = e.target;
                                handleDataChange("description", value);
                            }} /></td>
                        </tr>
                        <tr>
                            <td className='flex  '>Status : </td>
                            <td> <select name="status" id="" value={formData.status} onChange={(e) => {
                                const { value } = e.target;
                                handleDataChange("status", value);
                            }}> <option value="pending">pending</option>
                                <option value="completed">completed</option></select>  </td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td colSpan={2} className='text-center' ><button type="submit" >Add</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default Task