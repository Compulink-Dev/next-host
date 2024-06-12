export default async function getDownloads() {
    const response = await fetch(`${process.env.API_ROUTE}/api/downloads`, {
        cache: "no-store",
    });
    const downloads = await response.json();
    return downloads;
}