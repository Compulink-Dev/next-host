//@ts-ignore
export default async function getDownload(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/downloads/${id}`, {
        cache: "no-store",
    });
    const download = await res.json();
    return download;
}