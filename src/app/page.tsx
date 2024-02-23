import { lusitana } from "@/app/ui/fonts";
import FormEntry from "./ui/login/form-entry";
import LoginButton from "./ui/login/login-button";
import { createUserInfo } from "./lib/actions";

export default async function Home() {
  return (
    <form className="space-y-3" action={createUserInfo}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please enter information to continue.
        </h1>
        <div className="w-full">
          <FormEntry placeholder="First Name" name="firstname" />
          <FormEntry placeholder="Last Name" name="lastname" />
          <FormEntry placeholder="License Plate Number" name="licenseplate" />
          <FormEntry placeholder="Car Make" name="make" />
          <FormEntry placeholder="Car Model" name="model" />
        </div>
        <LoginButton />
      </div>
    </form>
  );
}
