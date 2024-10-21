import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Admin_Header from '../Components/Admin_Header';
import Admin_SidePanel from '../Components/Admin_SidePanel';
import AdminSidePanel from '../Components/AdminSidePanel';

const Admin_Page_Announcement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:8000/delete/announcement/' + id)
      .then(res => {
        location.reload();
      })
      .catch(err => console.log(err));
  };

  const handleExport = () => {
    const csvData = [
      ['ID', 'Title', 'Announcement'], // CSV Header
      ...data.map(announcement => [announcement.ID, announcement.title, announcement.announcement]) // Data Rows
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' 
      + csvData.map(e => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const a = document.createElement('a');
    a.setAttribute('href', encodedUri);
    a.setAttribute('download', 'announcements.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="admin-page">
      <div className="flex">
        <Admin_SidePanel className="w-64" />
        
        <div className="flex-grow p-6">
          <div className="flex justify-between mb-4">
            <Link to="/admin/create/announcement">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                CREATE ANNOUNCEMENT
            </button>
            </Link>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleExport}
            >EXPORT</button>
          </div>

          <div className="overflow-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Title</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{item.title}</td>
                    <td className="py-2 px-4 border-b">{item.announcement}</td>
                    <td className="py-2 px-4 border-b">
                    <Link to={`/admin/edit/announcement/${item.ID}`}>
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 flex items-center hover:bg-yellow-600">
                      <RiEdit2Line className="mr-1" /> 
                      <span>Edit</span>
                    </button>
                    </Link>
                      <button className="bg-red-500 text-white px-3 py-1 rounded flex items-center hover:bg-red-600" onClick={() => handleDelete(item.ID)}>
                        <FaTrashAlt className="mr-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Page_Announcement;
