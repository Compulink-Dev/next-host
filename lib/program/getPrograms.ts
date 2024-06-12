export default async function getPrograms() {
    const response = await fetch(`${process.env.API_ROUTE}/api/programs`, {
        cache: "no-store",
    });
    const programs = await response.json();
    return programs;
}