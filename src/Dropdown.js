import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import Loading from './Loading';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Dropdown = () => {
    const [selected, setSelected] = useState([]);
    const [userselected, setUserSelected] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            setTimeout(() => {
                setSelected(res.data)
                setLoading(true);
                console.log(res.data)})                
            }, 2000)
        .then((err) => console.log(err));
    }, []);

    
    const handleChange = (e) => {
        // console.log(e.target.value);
        axios.get(`https://jsonplaceholder.typicode.com/users/` + e.target.value)
        .then(res => {
            setTimeout(() => {                
                console.log(res.data);
                setLoading(true);
                localStorage.setItem('user', JSON.stringify(res.data));
               setUserSelected(res.data);            
                toast.success("Data Loaded");
            }, 2000);
        })
        .then((err) => console.log(err));
    }


  return (
    <div>

        <select className='form-control col-md-3' onChange={handleChange}>
            <option value="0">--Select User--</option>
            {loading ? selected.map((item) => (
                 <option key={item.id} value={item.id}>{item.name}</option>           
            )) : <Loading />}
        </select>
        <br /> <br />
        <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{userselected.id}</td>
                        <td>{userselected.name}</td>
                        <td>{userselected.username}</td>
                        <td>{userselected.email}</td>
                    </tr>
            </tbody>
        </Table>
        </div>
    </div>
  );
}

export default Dropdown;
