import { lusitana } from '@/app/ui/fonts';

export default function LynxLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none`}
    >
      <p className="text-[44px]">Lynx Parking</p>
    </div>
  );
}