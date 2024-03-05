import { fetchParkingByName } from "@/app/lib/data";
import Link from "next/link";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/solid";

export default async function ParkingPage({
  params,
}: {
  params: { parkingName: string };
}) {
  const parking = await fetchParkingByName(params.parkingName);

  return (
    <>
      <h1>{parking.name}</h1>
      <p>{parking.description}</p>
      <h1>{parking.openingtimesdescription}</h1>
      <Link href={parking.urllinkaddress} className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <GlobeEuropeAfricaIcon className="w-6" />
          <div>Website</div>
        </Link>
      <h1>{parking.operatorinformation}</h1>
      <h1>{parking.categorie}</h1>
      <h1>{parking.type}</h1>
    </>
  );
}
