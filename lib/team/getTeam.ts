//@ts-ignore
export default async function getTeam(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/teams/${id}`, {
        cache: "no-store",
    });
    const team = await res.json();
    return team;
}