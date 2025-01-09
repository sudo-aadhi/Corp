import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const EmailVerifiedPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center grow p-4">
      <h1 className="mb-4 text-2xl font-bold text-green-500">Email Verified</h1>
      <p className="mb-4 text-gray-600">
        Your email has been successfully verified.
      </p>
      <Link href={"/"} className={`${buttonVariants()} px-4 py-2`}>
        Go to home
      </Link>
    </div>
  );
};

export default EmailVerifiedPage;
