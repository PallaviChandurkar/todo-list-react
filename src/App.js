import React, { useState } from 'react'
import "./App.css";

function App() {
    const [name, setName] = useState("");

    const [list,setList] = useState([]);

    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(name);
        const data = {name};
        if(name) {
            setList((ls)=>[...ls,data]);
            setName("");
        }
    }

    const deleteItem = (id) => {
        console.log(id);
        const updateditems = list.filter((elem, ind) => {
            return ind !== id;
        })
        setList(updateditems);
    }

    const removeAll = () => {
        setList([]);
    }

    return (
        <>
        <div className="title">
            <h1>To do list</h1>
        </div>
        <div className="inputboxst">
            <form onSubmit={handleSubmit}>
            <input className="inputst" name="name" placeholder="Add Item.." value={name} onChange={(e) => setName(e.target.value)}/>
            <button className="addbtn">Add</button>
            </form>
        </div>
            <div className="btn">
            {
                list.map((a, ind) => {
                    return(
                 <div className="textbox" key={ind}>
                    <p className="parast">{a.name}</p>
                    <button className="deletebtn" onClick={ () => deleteItem(ind)}>Delete</button>
                </div>
                    )
                })
            }
            </div>
            <div className="marginst">
                <button className="btnst" onClick={removeAll}>Remove All</button>
            </div>
        </>
    )
}

export default App
