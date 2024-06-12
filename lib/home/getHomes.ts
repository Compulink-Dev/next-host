export default async function getHomes() {
    const response = await fetch(`${process.env.API_ROUTE}/api/homes`, {
        cache: "no-store",
    });
    const homes = await response.json();
    return homes;
}