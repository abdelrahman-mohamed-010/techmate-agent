import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import registerImg from "@/public/images/register.png";
import logo from "@/public/images/logo.png";
import PasswordInput from "@/components/auth/PasswordInput";

export default function Signup() {
  return (
    <div className="flex min-h-screen dark:bg-gray-900">
      <div className="relative hidden md:flex md:w-1/4 flex-col bg-gradient-to-b from-purple-900 via-purple-800 to-blue-900">
        <div className="relative z-10 p-6">
          <Link
            href="/login"
            className="flex items-center text-white hover:text-gray-200 transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>Back to login</span>
          </Link>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 items-center">
          <Link href="/login" className="px-6 py-4 rounded-l-xl">
            <span className="text-white font-semibold text-sm">Log in</span>
          </Link>
          <div className="px-6 py-4 bg-white rounded-l-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 font-semibold">
              Create Account
            </span>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src={registerImg}
            alt="Legal documents"
            fill
            className="object-cover opacity-30"
          />
        </div>
      </div>

      <div className="w-full md:w-3/4 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md space-y-4 md:space-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-24 w-24 md:h-38 md:w-38">
              <Image
                src={logo}
                alt="TechMate Logo"
                fill
                className="object-contain w-38 translate-y-9"
              />
            </div>
            <h1 className="mt-4 md:mt-6 text-4xl md:text-5xl text-[#242424] dark:text-white">
              TechMate
            </h1>
            <p className="mt-2 text-[#616161] dark:text-gray-300">
              Intelligent Legal Solutions Powered by AI
            </p>
          </div>

          <div className="mt-6 md:mt-10 space-y-4 md:space-y-6">
            <form className="mt-6 md:mt-8 space-y-4 md:space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="auth-input-label dark:text-gray-300"
                  >
                    First Name:
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Enter first name"
                    className="auth-input dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="auth-input-label dark:text-gray-300"
                  >
                    Last Name:
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Enter last name"
                    className="auth-input dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="auth-input-label dark:text-gray-300"
                >
                  Email Address:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="auth-input dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                />
              </div>

              <PasswordInput
                id="password"
                name="password"
                label="Password:"
                required
              />
              <PasswordInput
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password:"
                required
              />

              <button
                type="submit"
                className="auth-button dark:bg-purple-600 dark:hover:bg-purple-700"
              >
                Create Account
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-700 flex items-center justify-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer dark:bg-gray-800"
              >
                <Image
                  src="/images/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <span className="text-[#616161] dark:text-gray-300">
                  Continue with Google Account
                </span>
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#616161] dark:text-gray-300">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
