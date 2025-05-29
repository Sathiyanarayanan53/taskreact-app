import React from 'react'



const Home = ({ handleEdit, handleDelete, tableData }) => {
    return (
        <>
            <nav className='bg-red-500 text-white p-6 text-center text-xl' >
                <a href="/">Home</a> <span>|</span> <a href="/task">Create a Task</a>
            </nav>
            <section className='my-6 flex justify-end mx-8 md:mx-28'>
                <select name="" id="" className='my-6 '>
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="pending">pending</option>
                </select>
            </section>
            <table className='border border-black w-[70vw] text-center  mx-auto'>
                <thead>
                    <tr className='p-2 bg-blue-200 font-bold text-xl'>
                        <th className='border border-black p-2'>S.No</th>
                        <th className='border border-black p-2'>Title</th>
                        <th className='border border-black p-2'>Status</th>
                        <th className='border border-black p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td >{data.status}</td>
                                <td><a href="" onClick={() => {
                                    handleEdit(idx);
                                }} >edit</a>
                                    <a href="" onClick={() => {
                                        handleDelete(idx);
                                    }}>delete</a></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Home