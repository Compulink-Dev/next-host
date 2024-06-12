export default async function getReport() {
    const response = await fetch(`${process.env.API_ROUTE}/api/events`, {
        cache: "no-store",
    });
    const reports = await response.json();
    return reports;
}