//@ts-ignore
export default async function getChair(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/teams/chairs/${id}`, {
        cache: "no-store",
    });
    const chair = await res.json();
    return chair;
}