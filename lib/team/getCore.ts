//@ts-ignore
export default async function getCore(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/teams/cores/${id}`, {
        cache: "no-store",
    });
    const core = await res.json();
    return core;
}