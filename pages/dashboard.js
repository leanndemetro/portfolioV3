import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Router from "next/router";



export default function Dashboard() {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('/api/posts');
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        console.log(id)
        var data = JSON.stringify({
          query: `mutation{
        deletecontactSubmission(id: ${id} ){
         id
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

    const handleClick = event => {
    setId(event.target.id);
    handleSubmit();
  };

    return (
        <div className="flex flex-col h-screen bg-black font-sans font-extralight">
            <Nav />
            <div className="py-4 text-white bg-black px-4 sm:px-6 lg:px-20">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold">Users</h1>
                        <p className="mt-2 text-sm ">
                            A list of all the users in your account including their name, title, email and role.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 md:pl-0"
                                        >
                                            Name
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold ">
                                            Phone
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold ">
                                            Email
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold ">
                                            Message
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {posts.map((post) => (
                                        <tr key={post.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-6 md:pl-0">
                                                {post.name}
                                            </td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm ">{post.phone}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm ">{post.email}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm ">{post.message}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                                                <span>
                                                <button
                                                type="button"
                                                onClick={handleClick}
                                                className=" hover:text-indigo-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                    
                                                </button>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}