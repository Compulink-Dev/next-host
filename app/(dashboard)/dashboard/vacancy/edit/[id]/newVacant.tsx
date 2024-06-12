"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewVacancy = () => {
    const [newVacant, setNewVacant] = useState({
        name: "",
        jobType: "",
        dueDate: ""
    });
    const params = useParams();
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const getVacant = async () => {
        const res = await fetch(`/api/vacancies/${params.id}`);
        const data = await res.json();
        //@ts-ignore
        setNewVacant({ name: data.name, jobType: data.jobType, dueDate: data.dueDate });
    };

    // useEffect(() => {
    //     if (params.id) {
    //         getVacant();
    //     }
    // }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let errs = validate();

        if (Object.keys(errs).length) return setErrors(errs);

        setIsSubmitting(true);

        if (params.id) {
            await updateTask();
        } else {
            await createTask();
        }

        router.push("/vacancy");
    };

    const handleChange = (e: any) =>
        setNewVacant({ ...newVacant, [e.target.name]: e.target.value });

    const validate = () => {
        let errors = {};

        return errors;
    };

    const createTask = async () => {
        try {
            await fetch("/api/vacancies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacant),
            });
            router.push("/dashboard/vacancy");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                const res = await fetch(`/api/vacancies/${params.id}`, {
                    method: "DELETE",
                });
                router.push("/");
                router.refresh();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const updateTask = async () => {
        try {
            await fetch(`/api/vacancies/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacant),
            });
            router.push("/dashboard/vacancy");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-[calc(100vh-7rem)] flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <header className="flex justify-between">
                    <h1 className="font-bold text-3xl">
                        {!params.id ? "Create Task" : "Update task"}
                    </h1>
                    {params.id && (
                        <Button
                            className="bg-red-500 px-3 py-1 rounded-md"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    )}
                </header>
                <Input
                    type="text"
                    placeholder="Vacancy name"
                    name="name"
                    onChange={handleChange}
                    value={newVacant.name}
                    autoFocus
                    className="border-2 w-full p-4 rounded-lg my-4"
                />
                <Input
                    type="text"
                    placeholder="Job type"
                    name="jobType"
                    onChange={handleChange}
                    value={newVacant.jobType}
                    autoFocus
                    className=" border-2  w-[400px] p-4 rounded-lg my-4"
                />
                <Input
                    type="date"
                    placeholder="Due date"
                    name="dueDate"
                    onChange={handleChange}
                    value={newVacant.dueDate}
                    autoFocus
                    className="border-2 w-full p-4 rounded-lg my-4"
                />

                <Button className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg">
                    {params.id ? "Update" : "Save"}
                </Button>
            </form>
        </div>
    );
};

export default NewVacancy;