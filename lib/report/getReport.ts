//@ts-ignore
export default async function getReport(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/reports/${id}`, {
        cache: "no-store",
    });
    const report = await res.json();
    return report;
}