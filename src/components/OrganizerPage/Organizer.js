import styles from "./Organizer.css"
import styled from "styled-components";
import { useState, useEffect } from "react";
export default function Organizer() {
    // let history = useHistory()
    const [form, setForm] = useState({})

    const [potluckItems, setPotluckItems] = useState([])



    // useEffect(() => {
    //     // setPotluckItems(localStorage.getItem("potluckItems"))
    // }, [])

    const handleCheckbox = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const addItem = () => {
        let newPotluckItem = form.potluckItem
        // console.log(newPotluckItem)
        let newList = [...potluckItems];
        // console.log(newList)
        newList.push(newPotluckItem)
        setPotluckItems(newList)
        // console.log(potluckItems)
    }
    console.log(form)
    return (
        <div className="container">
            <div className="header">
                <h1>Ultimate Potluck</h1>
                <h2>Organizer</h2>
                <h3>Welcome back!</h3>
            </div>
            <div className="current">
                <button>New Potluck</button>
                <h3>Add an item using the icon below!</h3>
            </div>
            <div className="form">
                <label>Location:</label>
                <input onChange={handleForm}
                    type='text'
                    name='address'
                    placeholder='Where is it?'
                />
                <label>Date:</label>
                <input onChange={handleForm}
                    type='date'
                    name='date'
                    placeholder='Date'
                />
                <label>Time:</label>
                <input onChange={handleForm}
                    type='time'
                    name='time'
                    placeholder='Time'
                />
                <label>Potluck Item:</label>
                <input onChange={handleForm}
                    type='text'
                    name='potluckItem'
                    placeholder='What to bring'
                />
                <button onClick={addItem}>Add Item</button>

            </div>
            <div className="potluckList">

                {potluckItems.map(item => {
                    return (
                        <>
                        <label htmlFor={`${item}check`}>{item}</label>
                        <input onChange={handleCheckbox}
                            type='checkbox'
                            name={`${item}check`}
                            checked={form[`${item}check`]}
                        />
                        </>
                    )
                })}
            </div>

        </div>
    );
};