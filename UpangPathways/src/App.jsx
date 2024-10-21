import React from 'react';
import Admin_Page_Announcement from "./Admin_Pages/Admin_Page_Announcement";
import Admin_Page_Cite from "./Admin_Pages/Admin_Page_Cite";
import Admin_Page_FindRoom from "./Admin_Pages/Admin_Page_FindRoom";
import Admin_Page_Create_Announcement from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Create_Announcement";
import Admin_Page_Create_Cite from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Create_Cite";
import Admin_Page_Edit_Announcement from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Edit_Announcement";
import Admin_Page_Edit_Cite from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Edit_Cite";
import Admin_Layout from "./Layouts/Admin_Layout";
import User_Layout from "./Layouts/User_Layout";
import User_Page_Read_Announcement from "./User_Pages/READ/User_Page_Read_Announcement";
import User_Page_Announcement from "./User_Pages/User_Page_Announcement";
import User_Page_Cite from "./User_Pages/User_Page_Cite";
import User_Page_Findroom from "./User_Pages/User_Page_Findroom";
import User_Page_Home from "./User_Pages/User_Page_Home";
import User_Page_SchoolMap from "./User_Pages/User_Page_SchoolMap";
import User_Page_Suggestion from "./User_Pages/User_Page_Suggestion";
import Admin_Page_Suggestion from "./Admin_Pages/Admin_Page_Suggestion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotificationProvider } from './Context/NotificationContext'; // Import NotificationProvider

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <User_Layout />,
      children: [
        { path: '', element: <User_Page_Home /> },
        { path: 'schoolmap', element: <User_Page_SchoolMap /> },
        { path: 'announcement', element: <User_Page_Announcement /> },
        { path: 'findroom', element: <User_Page_Findroom /> },
        { path: '/read/announcement/:id', element: <User_Page_Read_Announcement /> },
        { path: '/cite', element: <User_Page_Cite /> },
        { path: 'suggestion', element: <User_Page_Suggestion /> },
      ],
    },
    {
      path: '/admin',
      element: <Admin_Layout />,
      children: [
        { path: '/admin/announcement', element: <Admin_Page_Announcement /> },
        { path: '/admin/cite', element: <Admin_Page_Cite /> },
        { path: '/admin/cite/add', element: <Admin_Page_Create_Cite /> },
        { path: '/admin/cite/edit/:id', element: <Admin_Page_Edit_Cite /> },
        { path: '/admin/findroom', element: <Admin_Page_FindRoom /> },
        { path: '/admin/create/announcement', element: <Admin_Page_Create_Announcement /> },
        { path: '/admin/edit/announcement/:id', element: <Admin_Page_Edit_Announcement /> },
        { path: '/admin/suggestions', element: <Admin_Page_Suggestion /> }
      ],
    },
  ]);

  return (
    <NotificationProvider> {/* Wrap the RouterProvider with NotificationProvider */}
      <RouterProvider router={router} />
    </NotificationProvider>
  );
};

export default App;