//@ts-ignore
export default async function getContact(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/contacts/${id}`, {
        cache: "no-store",
    });
    const contacts = await res.json();
    return contacts;
}