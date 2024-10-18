import Admin_Page_Announcement from "./Admin_Pages/Admin_Page_Announcement"
import Admin_Page_Event from "./Admin_Pages/Admin_Page_Event"
import Admin_Page_FindRoom from "./Admin_Pages/Admin_Page_FindRoom"
import Admin_Page_Create_Announcement from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Create_Announcement"
import Admin_Page_Edit_Announcement from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Edit_Announcement"
import Admin_Layout from "./Layouts/Admin_Layout"
import User_Layout from "./Layouts/User_Layout"
import User_Page_Read_Announcement from "./User_Pages/READ/User_Page_Read_Announcement"
import User_Page_Announcement from "./User_Pages/User_Page_Announcement"
import User_Page_Findroom from "./User_Pages/User_Page_Findroom"
import User_Page_Home from "./User_Pages/User_Page_Home"
import User_Page_SchoolMap from "./User_Pages/User_Page_SchoolMap"
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
      {
        path:'/',
        element:< User_Layout/>,
        children: [
          {path: '', element: <User_Page_Home/>},
          {path: 'schoolmap', element: <User_Page_SchoolMap />},
          {path: 'announcement', element: <User_Page_Announcement />},
          {path: 'findroom', element: <User_Page_Findroom />},
          {path: '/read/announcement/:id', element: <User_Page_Read_Announcement/>},
        ],
      },
      {
        path:'/admin',
        element:<Admin_Layout />,
        children: [
          {path:'/admin/announcement', element: <Admin_Page_Announcement/>},
          {path:'/admin/event', element: <Admin_Page_Event/>},
          {path:'/admin/findroom', element: <Admin_Page_FindRoom/>},
          {path:'/admin/create/announcement', element: <Admin_Page_Create_Announcement/>},
          {path:'/admin/edit/announcement/:id', element: <Admin_Page_Edit_Announcement/>}
        ],
      },
    ])
    return <RouterProvider router={router} />
  }

export default App