// app/signin/page.js (Next.js 13+ with App Router)
// or pages/signin.js (if using Pages Router)

"use client";
import { useState } from "react";
import Link from "next/link";
export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        // Here you can call your backend API for login
    };

    return (

        <section>


            <div className="grid grid-cols-1 lg:grid-cols-2 bg-blue-950">

                <div>
                    {/* left div */}
                    <div className="flex items-center justify-center  bg-[#1a1f57]">
                        <div className="w-full max-w-md bg-[#1a1f57] text-white p-4 rounded-lg">
                            <h1 className="text-3xl font-bold mb-6">Sign in</h1>

                            <p className="mb-6 text-xs">
                                New to nazarjapan.com?{" "}
                                <Link href="/sign-up" className="text-blue-400 hover:underline">
                                    Sign up
                                </Link>
                                . Are you a dealer?
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Email */}
                                <div>
                                    <label className="block mb-2 text-xs">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full p-2 rounded-md text-black bg-white outline-none"
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
                                        className="w-full p-2 rounded-md bg-white text-black outline-none"
                                        placeholder=""
                                    />
                                </div>

                                {/* Remember Me */}
                                <div className="flex items-center gap-2 text-xs">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>

                                {/* Forgot Password */}
                                <div>
                                    <Link href="/forgot-password" className="text-blue-400 hover:underline text-xs">
                                        Forgot your password?
                                    </Link>
                                </div>

                                {/* Button */}
                                <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="text-xs w-50  bg-yellow-400 text-black py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
                                >
                                    Log in
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block bg-blue-950  ">
                    {/* right div */}

                    <img src="/login-banner.webp" alt="" className="w-130 h-130" />
                </div>

            </div>
        </section>


    );
}
