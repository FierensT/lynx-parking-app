import { ArrowRightIcon } from '@heroicons/react/20/solid';
import  Button  from '../button';

export default function LoginButton() {
    return (
      <Button className="mt-4 w-full">
        Save Information <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    );
  }