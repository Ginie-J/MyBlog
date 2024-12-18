import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import AnimatedCursor from "react-animated-cursor";

import Layout from './pages/Layout';
import Main from './pages/Main';
import Post from './pages/Post';
import Contact from './pages/Contact';
import About from './pages/About';
import Git from './pages/Git';
import Postwrite from './pages/Postwrite';
import View from './pages/View';

import { AuthProvider } from './context/AuthContext';
import login from './pages/login';

/*인증 상태에 따라 제어*/
const PrivateRoute = ({children, adminOnly = false})=>{
  const {isAuthenticated, user} = useContext(AuthContext);
  if(!isAuthenticated){
    return <Navigate to={'/login'} replace></Navigate>
  }
  if(adminOnly && user.role === 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;

}

const App = () => {
  return (
   <AuthProvider>
     <AnimatedCursor />
     <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                 <Route index element={<Main />} />
                 <Route path="post" element={<Post />} />
                 <Route path="about" element={<About />} />
                 <Route path="git" element={<Git />} />
                 <Route path="contact" element={<Contact />} />
                 <Route path='view/:post' element={<View />} />

                <Route path='postWrite' element={<PrivateRoute adminOnly={true}> <Postwrite /> </PrivateRoute>}></Route>
              </Route>
          </Routes>

     </Router>
   </AuthProvider>  
  )
}

export default App