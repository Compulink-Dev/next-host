export default async function getTeams() {
    const response = await fetch(`${process.env.API_ROUTE}/api/teams`, {
        cache: "no-store",
    });
    const teams = await response.json();
    return teams;
}