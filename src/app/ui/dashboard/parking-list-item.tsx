"use client";
import { usePathname, useRouter } from 'next/navigation';


export default function ParkingListItem({
  key,
  name,
  openstate,
  availablecapacity,
  roadname,
}: parkingListItem) {

  const pathname = usePathname();
  const { replace }  = useRouter();

  function navigateToParking() {
    replace(`${pathname}/${name}}`);
    }


  return (
    <tr key={key}
      onClick={navigateToParking}
      className="w-full border-b py-3 text-sm cursor-pointer"
    >
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <p>{name}</p>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        {openstate == "1" ? "Open" : "Closed"}
      </td>
      <td className="whitespace-nowrap px-3 py-3">{availablecapacity}</td>
      <td className="whitespace-nowrap px-3 py-3">{roadname}</td>
    </tr>
  );
}
