import { ArrowPathIcon } from '@heroicons/react/20/solid';
import  Button  from '../button';

export default function UpdateButton() {
    return (
      <Button className="mt-4 w-full bg-yellow-500">
        Update Information <ArrowPathIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    );
  }