import React from 'react'
import ContactList from './_components/ContactList'
import getContacts from '@/lib/getContact'
import { connectToDB } from '@/lib/connectToDB'
import Contact from '@/models/ contact'


async function ContactPage() {

    const contacts = await getContacts()

    return (
        <div className=''>
            <ContactList contacts={contacts} />
        </div>
    )
}

export default ContactPage