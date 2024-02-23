'use server'
import { redirect } from 'next/navigation';
import path from 'path';
import { promises as fs } from 'fs';

const dataFilePath = path.join(process.cwd(), 'src/app/lib/user');

export async function createUserInfo(formData: FormData) {
    const userInfo = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        licenseplate: formData.get('licenseplate'),
        make: formData.get('make'),
        model: formData.get('model')
    };
  
    await fs.appendFile(dataFilePath, JSON.stringify(userInfo));
  
    redirect('/dashboard');
  }

  export async function updateUserInfo(formData: FormData) {
    const userInfo = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        licenseplate: formData.get('licenseplate'),
        make: formData.get('make'),
        model: formData.get('model')
    };
  
    await fs.writeFile(dataFilePath, JSON.stringify(userInfo));
  
    redirect('/dashboard');
  }

  export async function readUserInfo(){
    const userInfo = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(userInfo); 
  }

  export async function hasInfo(){
    return fs.access(dataFilePath, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false)
  }

  export async function deleteInfo(){
    await fs.rm(dataFilePath);

    redirect('/');
  }

