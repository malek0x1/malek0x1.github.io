

// import { sendEmailApi } from "@/lib/fetches";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { BarLoader } from "react-spinners";
import { z } from "zod";
import SectionTitle from "../SectionTitle";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import axios from "axios";
import Spinner from "../Spinner";

export const contactSchema = z.object({
    from_name: z.string().min(3).max(50),
    email: z.string().email(),
    number: z.string().min(6).max(20),
    message: z.string().min(10).max(500),
});


const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            message: "",
            number: "",
            email: "",
            from_name: ""
        }
    });

    const fields = [
        { name: "from_name", type: "text", placeholder: "Name", required: true },
        { name: "email", type: "email", placeholder: "Email", required: true },
        { name: "number", type: "text", placeholder: "Your Number", required: true },
        { name: "message", type: "textarea", placeholder: "Message", required: true }
    ];

    const onSubmit = async (data) => {
        if (!isLoading) {
            setIsLoading(true)
            let emailMessage = ``
            Object.keys(data).forEach(item => emailMessage += `-${item}: ${data[item]}\n\n`)
            if (emailMessage) {
                try {
                    const res = await axios.post("/api/email-send", {
                        message: btoa(emailMessage)
                    })
                    setIsLoading(false)
                    toast.success("Success! Your submission has been received. We'll be in touch soon")
                    form.reset()
                } catch (e) {
                    setIsLoading(false)
                    toast.error("Something went wrong")

                }
            }
        }
    };
    return (
        <div id="contactus" className="contactUs container fix">
            <Toaster richColors />
            <div className="contactUs_wrapper">
                <SectionTitle color="accent" classname="mb-8" title="Contact Me" />
                <p className="text-white mb-8">
                    Feel free to contact Me with any questions
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="contactUs__wrapper__form">
                        {fields.map((field, index) => (
                            <div key={index} className="contactUs__wrapper__form__small">
                                {field.type !== "textarea" ? (
                                    <input
                                        {...form.register(field.name, { required: field.required })}
                                        type={field.type}
                                        className="inputClean !w-full"
                                        placeholder={field.placeholder}
                                        name={field.name}
                                    />
                                ) : (
                                    <textarea
                                        {...form.register(field.name, { required: field.required })}
                                        name={field.name}
                                        className="inputClean"
                                        id="textarea" cols
                                        rows="8"
                                        placeholder={field.placeholder}
                                    ></textarea>
                                )}
                            </div>
                        ))}
                        <button type="submit" className='hover:opacity-80 items-center flex rounded-sm justify-center bg-white text-purple-800 py-3 px-6 text-xs flex-1 sm:px-12 '>
                            {!isLoading ?
                                `Submit`
                                : <Spinner />
                            }
                        </button>


                    </div>
                </form>
            </div>
        </div >
    );
};

export default ContactUs;
