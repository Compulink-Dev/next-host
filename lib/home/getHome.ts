//@ts-ignore
export default async function getHome(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/homes/${id}`, {
        cache: "no-store",
    });
    const home = await res.json();
    return home;
}