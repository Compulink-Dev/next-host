import React from 'react'
import ContactCard from './ContactCard'



function ContactList({ contacts }: { contacts: any }) {
    return (
        <div className='p-8 flex flex-col gap-4'>
            {
                contacts.map((contact: any) => (
                    <ContactCard
                        key={contact.id}
                        link={contact.id}
                        address={contact.address}
                        telephone={contact.telephone}
                        email={contact.email}
                    />
                ))
            }
        </div>
    )
}

export default ContactList