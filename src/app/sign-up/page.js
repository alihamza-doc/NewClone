// app/signin/page.js (Next.js 13+ with App Router)
// or pages/signin.js (if using Pages Router)

"use client";
import { useState } from "react";
import Link from "next/link";
export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        // Here you can call your backend API for login
    };

    return (

        <section>


            <div className="grid grid-cols-1 lg:grid-cols-2 ">

                <div>
                    {/* left div */}
                    <div className="flex items-center justify-center min-h-screen bg-[#1a1f57]">
                        <div className="w-full max-w-md bg-[#1a1f57] text-white p-4 rounded-lg">
                            <h1 className="text-3xl font-semibold mb-5">Sign in</h1>

                            <p className="mb-2 text-xs">
                                Already have an account?{" "}
                                <Link href="/sign-in" className="text-blue-400 hover:underline">
                                    Sign In
                                </Link>
                                
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* name */}
                                <div>
                                    <label className="block mb-2 text-xs">Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full p-3 rounded-md text-black bg-white outline-none text-xs"
                                        placeholder=""
                                    />
                                </div>
                                

                                {/* Email */}
                                <div>
                                    <label className="block mb-2 text-xs">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full p-3 rounded-md text-black bg-white outline-none text-xs"
                                        placeholder=""
                                    />
                                </div>
                                {/* Phone No. */}
                                <div>
                                    <label className="block mb-2 text-xs">Phone No.</label>
                                    <input
                                        type="number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        className="w-full p-3 rounded-md text-black bg-white outline-none text-xs"
                                        placeholder=""
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="block mb-2 text-xs">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full p-3 rounded-md bg-white text-black outline-none text-xs"
                                        placeholder=""
                                    />
                                </div>
                                {/*Confirm Password */}
                                <div>
                                    <label className="block mb-2 text-xs">Confirm Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full p-3 rounded-md bg-white text-black outline-none text-xs"
                                        placeholder=""
                                    />
                                </div>
                                {/*Address */}
                                <div>
                                    <label className="block mb-2 text-xs">Address</label>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        className="w-full p-3 rounded-md bg-white text-black outline-none text-xs"
                                        placeholder=""
                                    />
                                </div>

                                

                                {/* Forgot Password */}
                                <div>
                                    <Link href="/sign-in" className="text-blue-400 hover:underline text-xs">
                                        Already registered?
                                    </Link>
                                </div>

                                {/* Button */}
                                <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className=" w-50  bg-yellow-400 text-black py-3 rounded-md font-semibold hover:bg-yellow-500 transition text-xs"
                                >
                                    Register
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block bg-blue-950 p-2 pt-8">
                    {/* right div */}

                    <img src="/login-banner.webp" alt="" className="w-130 h-130" />
                </div>

            </div>
        </section>


    );
}
