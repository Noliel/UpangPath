import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

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
    <div className='md:w-full'>
      <div className='flex justify-between p-5 shadow-xl center place-items-center'>
        <div>
          <h1 className='font-bold'>Announcement</h1>
        </div>
        <div className='flex space-x-4'>
          <div className='bg-green-600 p-3 rounded-lg text-white cursor-pointer'>
            <Link to="/admin/create/announcement">
              <h1>Create Announcement</h1>
            </Link>
          </div>
          <button 
            className='bg-blue-600 p-3 rounded-lg text-white cursor-pointer'
            onClick={handleExport}
          >
            Export
          </button>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {data.map((announcement_data, index) => {
          return <div key={index} className='fix flex-row'>
              <div className='py-1 px-1 border-2 w-1/2 md:w-full h-20 m-0 rounded-lg  overflow-hidden shadow-lg class="border-2 border-lime-800 ..."'>
                <div className='font-medium flex flex-row ltr'>
                  <h1 className='font-bold'>TITLE :</h1>
                  <h1 className='ms-2'>{announcement_data.title}</h1>
                </div>
                <div className='font-medium flex flex-row ltr oveflow-hidden h-50'>
                  <h1 className='font-bold '>ANNOUNCEMENT :</h1>
                  <h1 className='ms-2 '>{announcement_data.announcement}</h1>
                </div>
                <div className='font-medium flex flex-row-reverse ltr mt-2'>
                  <Link to={`/admin/edit/announcement/${announcement_data.ID}`}>
                    <RiEdit2Line className='ms-2 text-lg cursor-pointer' />
                  </Link>
                  <button onClick={() => handleDelete(announcement_data.ID)}>
                    <FaTrashAlt className='text-red-500 text-lg cursor-pointer' />
                  </button>
                </div>
              </div>
            </div>
          
        })}
      </div>
    </div>
  );
};

export default Admin_Page_Announcement;
