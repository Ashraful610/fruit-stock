import { Table } from 'react-bootstrap';
import useFruits from '../../../Hooks/useFruits';
import Row from './Row/Row';

const ManageInventories = () => {
    const [fruits] = useFruits()
   
    return (
        <div className='container mt-3 '>
            <h2 className='text-center mb-4'>Manage 
                <span className='text-warning'> Inventories</span>
            </h2>
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
                   fruits.map(fruit => <Row key={fruit._id} fruit ={fruit}></Row>)
               }
               
            </tbody>
            </Table>
        </div>
    );
};

export default ManageInventories;