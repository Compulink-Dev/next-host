//@ts-ignore
export default async function getFooter(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/footers/${id}`, {
        cache: "no-store",
    });
    const footer = await res.json();
    return footer;
}