import { lusitana } from '@/app/ui/fonts';

export default function LynxLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-green`}
    >
      <p className="text-[44px]">Lynx</p>
    </div>
  );
}