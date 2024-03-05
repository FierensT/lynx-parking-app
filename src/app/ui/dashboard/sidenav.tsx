import LynxLogo from "@/app/ui/lynx-logo";
import { UserIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex h-20 items-end justify-start rounded-md lynx-background p-4 md:h-40">
        <div className="w-32 text-white md:w-40">
          <LynxLogo />
        </div>
      </div>
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <Link href="/dashboard" className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <HomeIcon className="w-6" />
          <div className="hidden md:block">Dashboard</div>
        </Link>
        <Link href="/dashboard/profile" className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <UserIcon className="w-6" />
          <div className="hidden md:block">Profile</div>
        </Link>
      </div>
    </div>
  );
}
