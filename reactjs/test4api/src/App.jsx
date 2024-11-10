import "./App.css"
import React from "react";
import DataTable from "react-data-table-component";
import { useEffect,useState } from "react"
import { render } from 'react-dom';
// import { Button, InputGroup,} from "react-bootstrap";
import { EntityTitle,InputGroup,Button ,Toaster, EditableText} from "@blueprintjs/core";

const AppToster = Toaster.create({
  position: "top"
})
function App(){
  const [users,setUsers] = useState ([]);
  const [newId,setNewId] = useState("")
  const [newName,setNewName] = useState("")
  const [newPrice,setNewPrice] = useState("")
  useEffect(()=>{
    fetch("/products")
    .then((Response) => Response.json())
    .then((json) => setUsers(json))
  },[])

  function adduser(){
    
    const prodId = newId.trim();
    const prodName = newName.trim();
    const price = newPrice.trim();

    if( prodId && prodName && price){
      fetch("/products",
        {
          method : "POST",
          
          body: JSON.stringify({
            prodId,
            prodName,
            price
        
          }),
          headers:{
            "content-Type":"application/json; charset=UTF-8"
          }
          
      }
    ).then((Response ) => Response.json())
    .then(data =>{
      setUsers([...users,data]);
       AppToster.show({
        message:"user added successfully",
        intent:"success",
        timeout:3000
      })
      setNewId("");
      setNewName("");
      setNewPrice("");
    })
    }
    window.location.reload ()
  }
  function onChangeHandler( prodId,key,value){
    setUsers((users)=>{
      return users.map(user =>{
        return user.prodId === prodId ? {...user,[key]:value} : user;
      })
    })
  }
  function updateUser(prodId){
    const user = users.find((user) => user.prodId === prodId);
    fetch(`/products`,
      {
          method : "PUT",
          
          body: JSON.stringify(user),
          headers:{
            "content-Type":"application/json; charset=UTF-8"
          }
          
      }
    ).then((Response ) => Response.json())
    .then(data =>{
      
       AppToster.show({
        message:"user updated successfully",
        intent:"success",
        timeout:3000
      })
      
    })
    window.location.reload ()
  }
  function deleteUser(prodId){
    fetch(`/products/${prodId}`,
      {
          method : "DELETE",
      }
    )
    .then((Response ) => Response.json())
    .then(data =>{
      setUsers((users)=>{
        return users.filter(user => user.prodId !== prodId)
      })
       AppToster.show({
        message:"user deleted successfully",
        intent:"success",
        timeout:3000
      })
      
    })
    window.location.reload ()

  }
  return (
    <div className="App">
      <table className="tableNAme">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
            <tr key={user.prodId}>
              <td>< EditableText onChange={value => onChangeHandler (user.prodId,"prodId",value )} value = {user.prodId} /></td>
              <td>< EditableText onChange={value => onChangeHandler (user.prodId,"prodName",value )} value = {user.prodName}/></td>
              <td>< EditableText onChange={value => onChangeHandler (user.prodId,"price",value )}  value ={user.price}/></td>
              <td>
                <Button className="u" intent ="primay " onClick={()=>updateUser(user.prodId)}>Update</Button>
                <Button className="d" intent= "danger"  onClick={()=>deleteUser(user.prodId)}>Delete</Button>
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
           
            <td >
              <InputGroup value={newId}
            onChange={(e) => setNewId(e.target.value)}
            placeholder="enter id..."
            />
            </td>
            <td >
              <InputGroup value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="enter product name..."
            />
            </td>
            <td >
              <InputGroup value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="enter price id..."
            />
            </td>
            <td>
              <Button className="a" onClick=  { adduser}  >add</Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}


export default App;
