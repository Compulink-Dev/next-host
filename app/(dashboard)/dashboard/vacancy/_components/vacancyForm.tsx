'use client'
import { DatePicker } from '@/components/dateTimePicker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Enter name"
    }).max(50),
    jobType: z.string().min(2, {
        message: "Enter job type"
    }).max(50),
    dueDate: z.string().min(2, {
        message: "Enter due date"
    }).max(50),
})

function VacancyForm() {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            jobType: "",
            dueDate: "",
        },

    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form data.
        // ✅ This will be type-safe and validated.
        let name = values.name
        let jobType = values.jobType
        let dueDate = values.dueDate

        try {
            const res = await fetch("/api/vacancies", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name, jobType, dueDate })
            })

            if (res.ok) {
                router.push('/dashboard/vacancy')
                toast.success('Vacancy has been created')
            } else {
                throw new Error("Failed to create vacancy")
            }
        } catch (error) {
            console.log(error);

        }


        console.log(values)
    }



    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="jobType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job type</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter job type" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Due date</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter due date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="bg-green-600 hover:bg-green-500 mt-8">Save changes</Button>
                </form>
            </Form>
            <Toaster />
        </div>
    )
}

export default VacancyForm