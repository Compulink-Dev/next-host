export default async function getAbouts() {
    const response = await fetch(`${process.env.API_ROUTE}/api/abouts`, {
        cache: "no-store",
    });
    const abouts = await response.json();
    return abouts;
}