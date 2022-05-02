import './Row.css'

const Row = ({fruit}) => {
    const {name, price, description, img, suplier } = fruit
    const newDescription = description.slice(0  , 85)

    const handleDelete = id => {
            console.log(id)
    }
    return (
            <tr>
               <td>
                   {
                       <img className='table-img' src={img} />
                   }
               </td>
                <td className=' detail'>
                      <span className='fruit-name'>  {name}</span> <br />
                     Price : {price} <br />
                     Suplier : {suplier}    
                </td>
                <td className='description '>
                   <p className=''>
                    {newDescription}
                    </p>
                 </td>
                <td className='delete-td'>
                    <button className='btn btn-danger delete-btn' onClick={() => handleDelete(fruit._id)}>Delete</button>
                </td>
            </tr>
        
    );
};

export default Row;