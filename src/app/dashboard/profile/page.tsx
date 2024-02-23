import { lusitana } from "@/app/ui/fonts";
import ProfileForm from "@/app/ui/profileform";
import { deleteInfo, updateUserInfo } from "@/app/lib/actions";
import UpdateButton from "@/app/ui/profile/update-button";
import DeleteButton from "@/app/ui/profile/delete-button";

export default async function Profile() {
  return (
    <div>
      <form className="space-y-3" action={updateUserInfo}>
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Please enter information to continue.
          </h1>
          <ProfileForm />
          <UpdateButton />
      </form>
      <form action={deleteInfo}>
          <DeleteButton/>
      </form>
    </div>
  );
}
