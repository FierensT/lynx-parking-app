import { fetchAllParkings } from "@/app/lib/data";
import ParkingListItem from "@/app/ui/dashboard/parking-list-item";

export default async function ParkingList() {
  const parkings = await fetchAllParkings();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <table className="text-gray-900">
          <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Name
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Availability
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Available Space
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Address
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {parkings?.map(
              ( 
                parking,
                index
              ) => (
                <ParkingListItem
                  key={index}
                  name={parking.name}
                  openstate={parking.isopennow}
                  availablecapacity={parking.availablecapacity}
                  roadname={JSON.parse(parking.locationanddimension).roadName}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
