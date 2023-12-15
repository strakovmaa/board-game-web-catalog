import { Urls } from '@/config';
import { revalidatePath } from 'next/cache';

export const revalidateAllAdminPaths = () => {
  revalidatePath(Urls.ADMIN);
  revalidatePath(Urls.ADMIN_NEW);
  revalidatePath(Urls.ADMIN_USERS);
};
