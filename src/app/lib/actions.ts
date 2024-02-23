'use server'
import { redirect } from 'next/navigation';

export async function createUserInfo(formData: FormData) {
    const userInfo = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        licensplate: formData.get('licenseplate'),
        carmake: formData.get('carmake'),
        carmodel: formData.get('carmodel')
    };
  
    //cookies().set('user', JSON.stringify(userInfo));
  
    redirect('/dashboard');
  }

