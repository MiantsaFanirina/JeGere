'use client'

import {motion} from "framer-motion";
import {ChangeEvent, useCallback, useState} from 'react';
import Image from 'next/image';
import {User} from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const validateForm = useCallback(() => {
        let isValid = true;
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    }, [email, password]);


    return (
        <motion.div
            initial={{opacity: 0.8, scale: 0.9}}
            animate={{opacity: 1, scale: 1, transition: {duration: 0.3}}}
        >
            <div className="flex flex-col items-center gap-6 text-slate-700">
                <div className="text-slate-700 shadow w-12 h-12 rounded-md flex items-center justify-center">
                    <User width={30} height={30}/>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <h1 className="font-bold text-3xl">Login</h1>
                    <h2>Welcome back! Please enter your credentials.</h2>

                    <div className="text-center text-xs">
                        <span>Don&#39;t have an account ? </span>
                        <Link href="/register" className="text-slate-700 underline hover:text-[#9ddadb] font-semibold">
                            Click here to register
                        </Link>
                    </div>
                </div>

                <button className="p-3 border border-black rounded-md text-slate-700 flex justify-center items-center gap-2 w-full">
                    <Image src="/google.png" alt="google" width={25} height={25}/> Sign in with Google
                </button>

                <div className="divider my-0">OR</div>

                <div className="w-full lg:w-[400px] flex flex-col gap-1">
                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Email *</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="Enter your Email"
                            className={`focus:ring focus:ring-slate-200 my-2 px-3 py-3 border outline-none rounded-md text-slate-700 bg-white text-sm w-full ${emailError && 'border-2 border-red-500'}`}
                        />
                        {emailError && <span className="text-red-500 text-xs mt-1">{emailError}</span>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label font-semibold">
                            <span className="label-text text-slate-700">Password *</span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            placeholder="Enter your Password"
                            className={`focus:ring focus:ring-slate-200 my-2 px-3 py-3 border outline-none rounded-md text-slate-700 bg-white text-sm w-full  ${passwordError && 'border-2 border-red-500'}`}
                        />
                        {passwordError && <span className="text-red-500 text-xs mt-1">{passwordError}</span>}
                    </label>
                </div>

                <button
                    onClick={validateForm}
                    className="p-3 rounded-md hover:border hover:border-black w-full bg-[#9ddadb] text-white"
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>

                <div className="text-center text-xs underline">
                    <Link href="/forgot-password" className="text-slate-700 hover:text-primary">
                        Forgot your password ?
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;
