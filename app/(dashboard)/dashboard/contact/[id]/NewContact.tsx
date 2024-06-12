"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BackButton from "@/components/backButton";
import { Textarea } from "@/components/ui/textarea";

const NewContact = () => {
    const [newVacant, setNewVacant] = useState({
        email: "",
        address: "",
        telephone: ""
    });
    const params = useParams();
    const router = useRouter();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const getVacant = async () => {
        const res = await fetch(`/api/contacts/${params.id}`);
        const data = await res.json();
        //@ts-ignore
        setNewVacant({
            email: data.email,
            address: data.address,
            telephone: data.telephone,
        });
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

        router.push("/dashboard/contact");
    };

    const handleChange = (e: any) =>
        setNewVacant({ ...newVacant, [e.target.name]: e.target.value });

    const validate = () => {
        let errors = {};

        return errors;
    };

    const createTask = async () => {
        try {
            await fetch("/api/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacant),
            });
            router.push("/dashboard/contact");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                const res = await fetch(`/api/contacts/${params.id}`, {
                    method: "DELETE",
                });
                router.push("/dashboard/contact");
                router.refresh();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const updateTask = async () => {
        try {
            await fetch(`/api/contacts/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newVacant),
            });
            router.push("/dashboard/contact");
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
                            {!params.id ? "Create contact" : "Update contact"}
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
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={newVacant.email}
                        autoFocus
                        className="border-2 w-full p-4 rounded-lg my-4"
                    />
                    <Textarea
                        placeholder="Address"
                        name="address"
                        onChange={handleChange}
                        value={newVacant.address}
                        autoFocus
                        className=" border-2  w-[400px] p-4 rounded-lg my-4"
                    />
                    <Textarea
                        placeholder="Telephone"
                        name="telephone"
                        onChange={handleChange}
                        value={newVacant.telephone}
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

export default NewContact;