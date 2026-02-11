"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactoCardFormData, ContactoCardSchema } from "@/types/contacto"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import Button from "@/app/components/ui/Button"


export default function FormContact() {
    const form = useForm<ContactoCardFormData>({
        resolver: zodResolver(ContactoCardSchema),
        defaultValues: {
            name: "", email: "", reason: "", message: ""
        },
    })

    const { isSubmitting } = form.formState;
    const onSubmit = async (data: ContactoCardFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Datos validados:", data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex-col h-full text-center justify-center">

                <FormField control={form.control}name="name" render={({ field }) =>
                (
                    <FormItem className="flex flex-col items-center">
                        <FormLabel className="text-sm font-bold tracking-widest bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text ">Nombre</FormLabel>
                        <FormControl>
                            <Input placeholder="Ingresa tu nombre" {...field} className="bg-white/3 text-white/20 placeholder:text-gray-300 rounded-xl px-4 transition-all duration-300 outline-none w-full max-w-md uppercase text-center" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) =>
                (
                    <FormItem className="flex flex-col items-center">
                        <FormLabel className="text-sm font-bold tracking-widest bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Ingresa tu email" {...field} className="bg-white/3 text-white/20 placeholder:text-gray-300 rounded-xl px-4 transition-all duration-300 outline-none w-full max-w-md uppercase text-center"/>
                        </FormControl>
                        <FormMessage />     
                    </FormItem>
                )} />

                <FormField control={form.control} name="reason" render={({field}) =>
                (
                    <FormItem className="flex flex-col items-center">
                        <FormLabel className="text-sm font-bold tracking-widest bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Motivo</FormLabel>
                        <FormControl>
                            <Input placeholder="Ingresa el motivo" {...field} className="bg-white/3 text-white/20 placeholder:text-gray-300 rounded-xl px-4 transition-all duration-300 outline-none w-full max-w-md uppercase text-center"/>
                        </FormControl>
                    </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({field}) =>
                (
                    <FormItem className="flex flex-col items-center">
                        <FormLabel className="text-sm font-bold tracking-widest bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent px-4">Mensaje</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Cuéntame más" {...field} className="bg-white/3 text-white/20 placeholder:text-gray-300 rounded-xl px-4 transition-all duration-300 outline-none text-center w-full max-w-md uppercase" />
                        </FormControl>
                    </FormItem>
                )} />

                <Button type="submit" disabled={isSubmitting} className="w-full max-w-md" variant="primary">
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
            </form>
        </Form>
    );
}