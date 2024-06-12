import Contact from "@/models/ contact"
import { connectToDB } from "./connectToDB"

export default async function getContacts() {
    await connectToDB()
    const contacts = await Contact.find()
    return contacts
}

