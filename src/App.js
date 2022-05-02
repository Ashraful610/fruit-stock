import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import ManageInventories from './Pages/Home/Inventory/ManageInventories/ManageInventories';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
         <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/manage' element={<ManageInventories></ManageInventories>}></Route>
        </Routes>
        <Footer></Footer>

    </div>
    
  );
}

export default App;
