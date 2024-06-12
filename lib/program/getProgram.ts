//@ts-ignore
export default async function getProgram(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/programs/${id}`, {
        cache: "no-store",
    });
    const program = await res.json();
    return program;
}