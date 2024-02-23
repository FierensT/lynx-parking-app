import ParkingList from "@/app/ui/dashboard/parking-list";
import { Suspense } from "react";

export default async function Dashboard() {
  return (
    <Suspense>
      <ParkingList />
    </Suspense>
  );
}
