import { lusitana } from '@/app/ui/fonts';

export default function LynxLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center`}
    >
      <p className="text-lg">Lynx Parking</p>
    </div>
  );
}