import Nav from '../components/nav'
import Footer from '../components/footer'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import axios from "axios";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Example() {
    const router = useRouter()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        var data = JSON.stringify({
            query: `mutation{
      createcontactSubmission(name:"${name}",email:"${email}", phone:"${phone}", message:"${message}"){
        name
      }
      }`,
            variables: {},
        });

        var config = {
            method: "post",
            url: "/api/graphql",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        const response = await axios(config);
      


    };
    return (
        <div className="flex flex-col h-screen font-sans font-extralight">
            <Nav />
            <div className="relative bg-black">
                <div className="absolute inset-0">
                    <div className=" bg-black absolute inset-y-0 left-0 w-1/2" />
                </div>
                <div className="relative max-w-7xl  mx-auto lg:grid lg:grid-cols-5">
                    <div className=" bg-[url('/hero-img.jpg')] py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                        <div className="max-w-lg mx-auto">
                            <h2 className="text-shadow-lg text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Contact</h2>
                            <p className="text-shadow-lg mt-3 text-lg leading-6 text-white">
                                For any enquiries, please feel free to reach out using any of the following methods.
                            </p>
                            <dl className="mt-8 text-base text-white">
                                <div className="mt-6">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex">
                                        <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3 text-shadow-lg">(407) 885-9149</span>
                                    </dd>
                                </div>
                                <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3 text-shadow-lg">demetroalyssa@gmail.com</span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <div className="max-w-lg mx-auto  lg:max-w-none">
                            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="full-name" className="sr-only">
                                        Full name
                                    </label>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        type="text"
                                        name="full-name"
                                        id="full-name"
                                        autoComplete="name"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#023368] focus:border-[#023368] border-gray-300 rounded-md"
                                        placeholder="Full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#023368] focus:border-[#023368] border-gray-300 rounded-md"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                        Phone
                                    </label>
                                    <input
                                        onChange={(e) => setPhone(e.target.value)}
                                        value={phone}
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#023368] focus:border-[#023368] border-gray-300 rounded-md"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                        Message
                                    </label>
                                    <textarea
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-[#023368]focus:border-[#023368] border border-gray-300 rounded-md"
                                        placeholder="Message"
                                    />
                                </div>
                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#023368] hover:bg-[#023368] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#023368]"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
