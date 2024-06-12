"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BackButton from "@/components/backButton";
import { Textarea } from "@/components/ui/textarea";

const NewTask = () => {
    const [newProgram, setNewProgram] = useState({
        title: "",
        description: "",
        imageUrl: ""
    });
    const params = useParams();
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const getVacant = async () => {
        const res = await fetch(`/api/taskforce/${params.id}`);
        const data = await res.json();
        //@ts-ignore
        setNewProgram({ title: data.title, description: data.description, imageUrl: data.imageUrl });
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

        router.push("/dashboard/programs");
    };

    const handleChange = (e: any) =>
        setNewProgram({ ...newProgram, [e.target.name]: e.target.value });

    const validate = () => {
        let errors = {};

        return errors;
    };

    const createTask = async () => {
        try {
            await fetch("/api/taskforce", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProgram),
            });
            router.push("/dashboard/programs");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                const res = await fetch(`/api/taskforce/${params.id}`, {
                    method: "DELETE",
                });
                router.push("/dashboard/programs");
                router.refresh();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const updateTask = async () => {
        try {
            await fetch(`/api/taskforce/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProgram),
            });
            router.push("/dashboard/programs");
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
                            {!params.id ? "Create Program" : "Update Program"}
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
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        value={newProgram.title}
                        autoFocus
                        className="border-2 w-full p-4 rounded-lg my-4"
                    />
                    <Input
                        type="file"
                        placeholder="Program image"
                        name="imageUrl"
                        onChange={handleChange}
                        autoFocus
                        className=" border-2  w-[400px] p-4 rounded-lg my-4"
                    />
                    <Textarea
                        placeholder="Enter Description"
                        name="description"
                        onChange={handleChange}
                        value={newProgram.description}
                        autoFocus
                        rows={10}
                        className="resize-none  border-2 w-full p-4 rounded-lg my-4"
                    />

                    <Button className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg">
                        {params.id ? "Update" : "Save"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default NewTask;