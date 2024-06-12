export default async function getContacts() {
    const response = await fetch(`${process.env.API_ROUTE}/api/contacts`, {
        cache: "no-store",
    });
    const contacts = await response.json();
    return contacts;
}