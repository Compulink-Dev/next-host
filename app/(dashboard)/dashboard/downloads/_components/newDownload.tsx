"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BackButton from "@/components/backButton";

const NewDownload = () => {
    const [newDownload, setNewDownload] = useState({
        title: "",
        document: "",
        imageUrl: "",
        date: ""
    });
    const params = useParams();
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const getDownload = async () => {
        const res = await fetch(`/api/downloads/${params.id}`);
        const data = await res.json();
        //@ts-ignore
        setNewDownload({ title: data.title, document: data.document, imageUrl: data.imageUrl, date: data.date });
    };

    // useEffect(() => {
    //     if (params.id) {
    //         getDownload();
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

        router.push("/dashboard/downloads");
    };

    const handleChange = (e: any) =>
        setNewDownload({ ...newDownload, [e.target.name]: e.target.value });

    const validate = () => {
        let errors = {};

        return errors;
    };

    const createTask = async () => {
        try {
            await fetch(`/api/downloads`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newDownload),
            });
            router.push("/dashboard/downloads");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this download?")) {
            try {
                const res = await fetch(`/api/downloads/${params.id}`, {
                    method: "DELETE",
                });
                router.push("/dashboard/downloads");
                router.refresh();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const updateTask = async () => {
        try {
            await fetch(`/api/downloads/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newDownload),
            });
            router.push("/dashboard/downloads");
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
                            {!params.id ? "Create download" : "Update download"}
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
                        placeholder="Download title"
                        name="title"
                        onChange={handleChange}
                        value={newDownload.title}
                        autoFocus
                        className="border-2 w-full p-4 rounded-lg my-4"
                    />
                    <Input
                        type="text"
                        placeholder="Document"
                        name="document"
                        onChange={handleChange}
                        value={newDownload.document}
                        autoFocus
                        className=" border-2  w-[400px] p-4 rounded-lg my-4"
                    />
                    <Input
                        type="text"
                        placeholder="Cover image"
                        name="imageUrl"
                        onChange={handleChange}
                        value={newDownload.imageUrl}
                        autoFocus
                        className=" border-2  w-[400px] p-4 rounded-lg my-4"
                    />
                    <Input
                        type="date"
                        placeholder="Download date"
                        name="date"
                        onChange={handleChange}
                        value={newDownload.date}
                        autoFocus
                        className="border-2 w-full p-4 rounded-lg my-4"
                    />

                    <Button className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg">
                        {params.id ? "Update" : "Save"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default NewDownload;