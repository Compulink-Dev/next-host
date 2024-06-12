"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BackButton from "@/components/backButton";
import { Textarea } from "@/components/ui/textarea";
import EventEmitter from "events";

const NewAboutSecond = () => {
    const [newVacant, setNewVacant] = useState({
        title: "",
        title2: "",
        title3: "",
        title4: "",
        imageUrl: ""
    });
    const params = useParams();
    const router = useRouter();

    const emitter = new EventEmitter()
    emitter.setMaxListeners(20)

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const getVacant = async () => {
        const res = await fetch(`/api/aboutSecond/${params.id}`);
        const data = await res.json();
        //@ts-ignore
        setNewVacant({ title: data.title, title2: data.title2, title3: data.title3, title4: data.title4, imageUrl: data.imageUrl });
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

        router.push("/dashboard/about");
    };

    const handleChange = (e: any) =>
        setNewVacant({ ...newVacant, [e.target.name]: e.target.value });

    const validate = () => {
        let errors = {};

        return errors;
    };

    const createTask = async () => {
        try {
            await fetch("/api/aboutSecond", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacant),
            });
            router.push("/dashboard/about");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                const res = await fetch(`/api/aboutSecond/${params.id}`, {
                    method: "DELETE",
                });
                router.push("/dashboard/about");
                router.refresh();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const updateTask = async () => {
        try {
            await fetch(`/api/aboutSecond/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacant),
            });
            router.push("/dashboard/about");
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
                            {!params.id ? "Create Task" : "Update task"}
                        </h1>
                        {params.id && (
                            <Button
                                disabled
                                className="bg-red-500 px-3 py-1 rounded-md"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        )}
                    </header>
                    <Textarea
                        placeholder="First title"
                        name="title"
                        onChange={handleChange}
                        value={newVacant.title}
                        autoFocus
                        className="border-2 w-full p-4 rounded-lg my-4"
                    />
                    <Textarea

                        placeholder="Second title"
                        name="title2"
                        onChange={handleChange}
                        value={newVacant.title2}
                        autoFocus
                        className=" border-2  w-[400px] p-4 rounded-lg my-4"
                    />
                    <Textarea

                        placeholder="Third title"
                        name="title3"
                        onChange={handleChange}
                        value={newVacant.title3}
                        autoFocus
                        className="border-2 w-full p-4 rounded-lg my-4"
                    />
                    <Textarea

                        placeholder="Fourth title"
                        name="title4"
                        onChange={handleChange}
                        value={newVacant.title4}
                        autoFocus
                        className=" border-2  w-[400px] p-4 rounded-lg my-4"
                    />
                    <Input
                        type="file"
                        placeholder="Cover Image"
                        name="imageUrl"
                        onChange={handleChange}
                        autoFocus
                        className=" border-2  w-[400px] p-4 rounded-lg my-4"
                    />
                    <Button className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg">
                        {params.id ? "Update" : "Save"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default NewAboutSecond;