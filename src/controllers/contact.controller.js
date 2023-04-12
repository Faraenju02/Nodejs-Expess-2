import { query } from "express"
import { getConnection } from "./../database/database"

const getContacts = async (req, res) => {
    try {

        const conn = await getConnection()
        const result = await conn.query("SELECT id, name , age, phone, email FROM users")
        console.log(result)
        res.json(result)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const getContact = async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params

        const conn = await getConnection()
        const result = await conn.query("SELECT id, name , age, phone, email FROM users WHERE id = ?", id)
        console.log(result)
        res.json(result)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


const addContact = async (req, res) => {
    try {

        const { name, age, phone, email } = req.body

        if (name == undefined || age == undefined || phone == undefined || email == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." })
        }

        const contact = { name, age, phone, email }
        const conn = await getConnection()
        const result = await conn.query("INSERT INTO users SET ?", contact)

        res.json("Contact added")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

const updateContact = async (req, res) => {
    try {
        
        const { id } = req.params
        const { name, age, phone, email } = req.body

        if (id == undefined || name == undefined || age == undefined || phone == undefined || email == undefined) {
            res.status(400).json({ message: "Bad request. Please fill all fields." })
        }

        const contact = { name, age, phone, email }
        const conn = await getConnection()
        const result = await conn.query("UPDATE users SET ? WHERE id = ?", [contact,id])
        console.log("Contact Deleted")
        res.json(result)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const deleteContact = async (req, res) => {
    try {
        console.log(req.params)
        const { id } = req.params

        const conn = await getConnection()
        const result = await conn.query("DELETE FROM users WHERE id = ?", id)
        console.log("Contact Deleted")
        res.json(result)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}



export const methods = {
    getContacts,
    addContact,
    getContact,
    deleteContact,
    updateContact
}