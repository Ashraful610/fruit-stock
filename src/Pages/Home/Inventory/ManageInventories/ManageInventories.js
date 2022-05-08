import { Button, Table } from 'react-bootstrap';
import useFruits from '../../../Hooks/useFruits';
import Row from './Row/Row';
import './ManageInventories.css'
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    const [fruits , setFruits] = useFruits()

    const handleDelete = id => {
        const procced = window.confirm('Are you sure you want to delete fruit')
        if(procced){
           const url = `https://protected-fjord-63330.herokuapp.com/fruits/${id}`
           fetch(url , {
               method:'DELETE'
           })
           .then(res => res.json())
           .then(() => {
               const remaningFruits = fruits.filter(fruit => fruit._id !== id)
               setFruits(remaningFruits)
           })
        }
    }
    // const navigate = useNavigate()

    return (
        <div className='container mt-3 '>
            <h2 className='text-center mb-4'>Manage 
                <span className='text-warning'> Inventories</span>
            </h2>
            <div className='add-new-item'>
                <Link to='/addNewItem'>
                   <Button className='btn btn-warning' size='lg'>Add New Item</Button>
                </Link>
            </div>
         <Table striped bordered hover size="sm" responsive="sm">
            <thead>
                <tr>
                <th className='fs-5'>Fruits Image</th>
                <th className='fs-5'>Fruits Detail</th>
                <th className='fs-5'>Fruits Description</th>
                <th className='fs-5'>Fruits Delete</th>
                </tr>
            </thead>
            <tbody>
               {
                   fruits.map(fruit => <Row key={fruit._id} handleDelete={handleDelete} fruit ={fruit}></Row>)
               }
               
            </tbody>
            </Table>
        </div>
    );
};

export default ManageInventories;