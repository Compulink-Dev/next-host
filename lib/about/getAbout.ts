//@ts-ignore
export default async function getAbout(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/about/${id}`, {
        cache: "no-store",
    });
    const about = await res.json();
    return about;
}