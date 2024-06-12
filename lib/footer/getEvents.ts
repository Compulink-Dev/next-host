export default async function getEvents() {
    const response = await fetch(`${process.env.API_ROUTE}/api/events`, {
        cache: "no-store",
    });
    const events = await response.json();
    return events;
}