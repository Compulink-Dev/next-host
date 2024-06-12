export default async function getCores() {
    const response = await fetch(`${process.env.API_ROUTE}/api/teams/cores`, {
        cache: "no-store",
    });
    const cores = await response.json();
    return cores;
}