
import { IcrudData } from './Datatype';
import './Crud.style.css';
import { Button } from '@mui/material';


  type getDataprops = {
    getData: IcrudData[];
    handleDelete: (id: number) => void;
    handleEdit: (item: IcrudData) => void;
  };


export default function Gettable(props: getDataprops) {
  const { getData, handleDelete, handleEdit } = props;


return (
    <div className="table_style mt-4">
      {getData.length > 0 && (
        <table className="table shadow">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((item) => (
              <tr key={item.id}>
                <td>{item.userName}</td>
                <td>{item.passWord}</td>
                <td>{item.emailId}</td>
                <td>
                  <Button variant="contained" onClick={()=>handleEdit(item)}>Edit</Button>

                  <Button
                    variant="contained"
                    sx={{ marginLeft: 3 }}
                    onClick={()=>handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {getData.length < 1 && <div>No record found!</div>}
    </div>
  );
}
