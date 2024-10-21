import Admin_Page_Announcement from "./Admin_Pages/Admin_Page_Announcement"
import Admin_Page_Departments from "./Admin_Pages/Admin_Page_Departments"
import Admin_Page_Cite from "./Admin_Pages/Admin_Page_Departments"
import Admin_Page_FindRoom from "./Admin_Pages/Admin_Page_FindRoom"
import Admin_Page_Home from "./Admin_Pages/Admin_Page_Home"
import Admin_Page_Login from "./Admin_Pages/Admin_Page_Login"
import Admin_Page_Profile from "./Admin_Pages/Admin_Page_Profile"
import Admin_Page_Register from "./Admin_Pages/Admin_Page_Register"
import Admin_Page_Create_Announcement from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Create_Announcement"
import Admin_Page_Create_Departments from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Create_Departments"
import Admin_Page_Create_Cite from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Create_Departments"
import Admin_Page_Edit_Announcement from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Edit_Announcement"
import Admin_Page_Edit_Departments from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Edit_Departments"
import Admin_Page_Edit_Cite from "./Admin_Pages/CREATE_UPDATE_DELETE/Admin_Page_Edit_Departments"
import Admin_Layout from "./Layouts/Admin_Layout"
import User_Layout from "./Layouts/User_Layout"
import User_Page_Read_Announcement from "./User_Pages/READ/User_Page_Read_Announcement"
import User_Page_Announcement from "./User_Pages/User_Page_Announcement"
import User_Page_Departments from "./User_Pages/User_Page_Departments"
import User_Page_Cite from "./User_Pages/User_Page_Departments"
import User_Page_Findroom from "./User_Pages/User_Page_Findroom"
import User_Page_Home from "./User_Pages/User_Page_Home"
import User_Page_SchoolMap from "./User_Pages/User_Page_SchoolMap"
import {BrowserRouter, Route, Routes, Navigate, useLocation} from "react-router-dom";

const App = () => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');

    return !!token;
    };

    const ProtectedRoute = ({ children }) => {
      const location = useLocation();
      return isAuthenticated() ? (
          children
      ) : (
          <Navigate to="/admin/login" state={{ from: location.pathname }} />
      );
    };
    return(
      <BrowserRouter>
        <Routes>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<User_Page_Home/>}></Route>
          <Route path="/schoolmap" element={<User_Page_SchoolMap/>}></Route>
          <Route path="/announcement" element={<User_Page_Announcement/>}></Route>
          <Route path="//departments/:department" element={<User_Page_Departments/>}></Route>
          {/*AUTHENTICATION ROUTES*/}
          <Route path="/admin/register" element={<Admin_Page_Register/>}></Route>
          <Route path="/admin/login" element={<Admin_Page_Login />}></Route>
          {/*PROTECTED ROUTES*/}
          <Route
              path="/admin"
              element={<ProtectedRoute> <Admin_Page_Home /> </ProtectedRoute>}
          />
          <Route
              path="/admin/announcement"
              element={<ProtectedRoute> <Admin_Page_Announcement /> </ProtectedRoute>}
          />
          <Route
              path="/admin/create/announcement"
              element={<ProtectedRoute> <Admin_Page_Create_Announcement /> </ProtectedRoute>}
          />
          <Route
              path="/admin/edit/announcement/:id"
              element={<ProtectedRoute> <Admin_Page_Edit_Announcement /> </ProtectedRoute>}
          />
          <Route
              path="/admin/departments"
              element={<ProtectedRoute> <Admin_Page_Departments /> </ProtectedRoute>}
          />
          <Route
              path="/admin/departments/add"
              element={<ProtectedRoute> <Admin_Page_Create_Departments /> </ProtectedRoute>}
          />
          <Route
              path="/admin/departments/edit/:id"
              element={<ProtectedRoute> <Admin_Page_Edit_Departments /> </ProtectedRoute>}
          />
          
          </Routes>
      </BrowserRouter>
    )
  }

export default App

console.log('Token after login:', localStorage.getItem('token'));

/* const router = createBrowserRouter([
  {
    path:'/',
    element:< User_Layout/>,
    children: [
      {path: '', element: <User_Page_Home/>},
      {path: 'schoolmap', element: <User_Page_SchoolMap />},
      {path: 'announcement', element: <User_Page_Announcement />},
      {path: 'findroom', element: <User_Page_Findroom />},
      {path: '/read/announcement/:id', element: <User_Page_Read_Announcement/>},
      {path: '/cite', element: <User_Page_Cite/>},
    ],
  },
  {
    path:'/admin',
    element:<Admin_Layout />,
    children: [
      {path:'/admin/announcement', element: <Admin_Page_Announcement/>},
      {path:'/admin/cite', element: <Admin_Page_Cite/>},
      {path:'/admin/cite/add', element: <Admin_Page_Create_Cite/>},
      {path:'/admin/cite/edit/:id', element: <Admin_Page_Edit_Cite/>},
      {path:'/admin/findroom', element: <Admin_Page_FindRoom/>},
      {path:'/admin/create/announcement', element: <Admin_Page_Create_Announcement/>},
      {path:'/admin/edit/announcement/:id', element: <Admin_Page_Edit_Announcement/>}
    ],
  },
])
return <RouterProvider router={router} /> */