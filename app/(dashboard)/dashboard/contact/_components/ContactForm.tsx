'use client'
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
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useRouter } from 'next/navigation'


const formSchema = z.object({
    contact: z.string().min(2, {
        message: "Enter contact"
    }).max(50),
    email: z.string().min(2, {
        message: "Enter email"
    }).max(50),
    address: z.string().min(2, {
        message: "Enter address"
    }).max(50),
    imageUrl: z.string().min(2, {
        message: "Enter imageUrl"
    }).max(50),
})


function ContactForm() {

    const router = useRouter()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            contact: "",
            email: "",
            address: "",
            imageUrl: ""
        },

    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form data.
        // ✅ This will be type-safe and validated.
        const contact = values.contact
        const address = values.address
        const email = values.email
        const imageUrl = values.imageUrl

        try {
            const res = await fetch(`${process.env.API_ROUTE}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ contact, email, address, imageUrl })
            })

            if (res.ok) {
                router.push('/dashboard/about')
            } else {
                throw new Error("Failed to create a paragraph")
            }
        } catch (error) {
            console.log(error);

        }


        console.log(values)
    }

    return (
        <div className='p-8'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="contact"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter contact" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <Input type='file' placeholder="Enter image" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className='bg-green-600 hover:bg-green-500'>Save changes</Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm