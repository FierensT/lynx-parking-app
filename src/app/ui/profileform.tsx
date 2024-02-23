import FormEntry from "./login/form-entry";
import { hasInfo, readUserInfo } from "../lib/actions";

export default async function ProfileForm() {
  let userInfo = {
    firstname: "",
    lastname: "",
    licenseplate: "",
    make: "",
    model: "",
  };

  if (await hasInfo()) {
    userInfo = await readUserInfo();
  }

  return (
    <div className="w-full">
      <FormEntry
        placeholder="First Name"
        name="firstname"
        value={userInfo.firstname}
      />
      <FormEntry
        placeholder="Last Name"
        name="lastname"
        value={userInfo.lastname}
      />
      <FormEntry
        placeholder="License Plate Number"
        name="licenseplate"
        value={userInfo.licenseplate}
      />
      <FormEntry placeholder="Car Make" name="make" value={userInfo.make} />
      <FormEntry placeholder="Car Model" name="model" value={userInfo.model} />
    </div>
  );
}
