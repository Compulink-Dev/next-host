//@ts-ignore
export default async function getVacancy(id) {
    const res = await fetch(`${process.env.API_ROUTE}/api/vacancies/${id}`, {
        cache: "no-store",
    });
    const vacancy = await res.json();
    return vacancy;
}