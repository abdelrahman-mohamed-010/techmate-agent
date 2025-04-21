import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import registerImg from "@/public/images/register.png";
import logo from "@/public/images/logo.png";
import PasswordInput from "@/components/auth/PasswordInput";

export default function ResetPassword() {
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
            <h2 className="text-xl md:text-2xl font-bold text-center text-[#343434] dark:text-white">
              RESET PASSWORD
            </h2>
            <p className="text-center text-[#616161] dark:text-gray-300">
              Please enter your new password below.
            </p>

            <form className="mt-8 space-y-6">
              <PasswordInput
                id="password"
                name="password"
                label="New Password:"
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
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
