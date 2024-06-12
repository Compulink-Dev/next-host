//@ts-ignore
export default async function getEvent(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/events/${id}`, {
        cache: "no-store",
    });
    const event = await res.json();
    return event;
}