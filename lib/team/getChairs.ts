export default async function getChairs() {
    const response = await fetch(`${process.env.API_ROUTE}/api/teams/chairs`, {
        cache: "no-store",
    });
    const chairs = await response.json();
    return chairs;
}