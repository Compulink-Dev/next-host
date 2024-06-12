"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BackButton from "@/components/backButton";

const NewCore = () => {
    const [newVacant, setNewVacant] = useState({
        title: "",
        subtitle: "",
        imageUrl: "",
        position: "",
        link: ""
    });
    const params = useParams();
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const getVacant = async () => {
        const res = await fetch(`/api/cores/${params.id}`);
        const data = await res.json();
        //@ts-ignore
        setNewVacant({ title: data.title, subtitle: data.subtitle, imageUrl: data.imageUrl, position: data.position, link: data.link });
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

        router.push("/dashboard/team");
    };

    const handleChange = (e: any) =>
        setNewVacant({ ...newVacant, [e.target.name]: e.target.value });

    const validate = () => {
        let errors = {};

        return errors;
    };

    const createTask = async () => {
        try {
            await fetch("/api/cores", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacant),
            });
            router.push("/dashboard/team");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                const res = await fetch(`/api/cores/${params.id}`, {
                    method: "DELETE",
                });
                router.push("/dashboard/team");
                router.refresh();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const updateTask = async () => {
        try {
            await fetch(`/api/cores/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacant),
            });
            router.push("/dashboard/team");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full p-4">
            <div className="flex items-center justify-end mx-20">
                <BackButton />
            </div>
            <div className="mt-12 flex justify-center items-center">
                <form onSubmit={handleSubmit}>
                    <header className="flex justify-between">
                        <h1 className="font-bold text-3xl">
                            {!params.id ? "Create Secretary" : "Update Secretary"}
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
                        placeholder="Job type"
                        name="title"
                        onChange={handleChange}
                        value={newVacant.title}
                        autoFocus
                        className=" border-2  w-[400px] p-4 rounded-lg my-4"
                    />
                    <Input
                        type="text"
                        placeholder="Subtitle"
                        name="subtitle"
                        onChange={handleChange}
                        value={newVacant.subtitle}
                        autoFocus
                        className="border-2 w-full p-4 rounded-lg my-4"
                    />

                    <Input
                        type="text"
                        placeholder="Position"
                        name="position"
                        onChange={handleChange}
                        value={newVacant.position}
                        autoFocus
                        className="border-2 w-full p-4 rounded-lg my-4"
                    />
                    <Input
                        type="text"
                        placeholder="Link"
                        name="link"
                        onChange={handleChange}
                        value={newVacant.link}
                        autoFocus
                        className="border-2 w-full p-4 rounded-lg my-4"
                    />
                    <Input
                        type="file"
                        placeholder="Job type"
                        name="imageUrl"
                        onChange={handleChange}
                        value={newVacant.imageUrl}
                        autoFocus
                        className=" border-2  w-[400px] my-4"
                    />

                    <Button className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg">
                        {params.id ? "Update" : "Save"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default NewCore;