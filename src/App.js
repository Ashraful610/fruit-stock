import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import AddNewItem from './Pages/Home/Inventory/ManageInventories/AddNewItem/AddNewItem';
import ManageInventories from './Pages/Home/Inventory/ManageInventories/ManageInventories';
import UpdateFruit from './Pages/Home/UpdateFruit/UpdateFruit';
import LogIn from './Pages/LogIn/LogIn';
import MyItem from './Pages/MyItem/MyItem';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/Shared/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div>
         <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/manage' element={<ManageInventories>
              </ManageInventories>}>
            </Route>
            <Route path='/addNewItem' element={<AddNewItem></AddNewItem>}>
            </Route>
            <Route path='/myItem' element={<MyItem></MyItem>}></Route>
            <Route path='/login' element={<LogIn></LogIn>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/updateFruit/:fruitId' element={
              <RequireAuth>
                      <UpdateFruit></UpdateFruit>
              </RequireAuth>
            }></Route>
        </Routes>
        <Footer></Footer>
        
    </div>
    
  );
}

export default App;
