import { TrashIcon } from '@heroicons/react/20/solid';
import  Button  from '../button';

export default function DeleteButton() {
    return (
      <Button className="mt-4 w-full bg-red-500">
        Delete Information <TrashIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    );
  }