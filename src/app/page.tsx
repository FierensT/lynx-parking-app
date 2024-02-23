import { lusitana } from "@/app/ui/fonts";
import LoginButton from "./ui/login/login-button";
import { createUserInfo, hasInfo } from "./lib/actions";
import ProfileForm from "./ui/profileform";
import { redirect } from "next/navigation";

export default async function Home() {
  if(await hasInfo() === false){
    return (
      <form className="space-y-3" action={createUserInfo}>
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Please enter information to continue.
          </h1>
          <ProfileForm />
          <LoginButton />
        </div>
      </form>
    );
  }
  else{
    redirect("/dashboard");
  }



}
