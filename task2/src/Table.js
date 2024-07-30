import React from 'react'
import DataTable from 'react-data-table-component'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Table() {

   const data = [
    {
        serial: 1,
        photo: 'sani',
        name: 'Alex',
        phone: '123486954',
        email: 'alex@gmail.com'
    },
    {
        serial: 2,
        photo: 'sani',
        name: 'Max',
        phone: '893729562',
        email: 'max@gmail.com'
    },
    {
        serial: 3,
        photo: 'sani',
        name: 'Henry',
        phone: '938926104723',
        email: 'henry@gmail.com'
    }
   ]



  return (
    <div className='contact-table'>
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((val,i)=>
                    <tr key={i}>
                        <td>
                           {val.serial}
                        </td>
                        <td>
                           {val.img} 
                        </td>
                        <td>
                           {val.name} 
                        </td>
                        <td>
                           {val.phone} 
                        </td>
                        <td>
                           {val.email} 
                        </td>
                        <td>
                            <button className='edit-btn'><FaEdit/></button>
                            <button className='dlt-btn'><RiDeleteBin6Line/></button>
                        </td>
                    </tr>
                )
            }

        </tbody>
      </table>
    </div>
  )
}

export default Table
