import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserAuthRecords } from '@/actions/userAuth';
import { getUserAuthRecordByPassword } from '@/app/[locale]/admin/_components/userAuth/utils';

const providers = [];

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const secret = process.env.NEXTAUTH_SECRET;

if (clientId && clientSecret) {
  providers.push(
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  );
}

providers.push(
  CredentialsProvider({
    credentials: {
      username: { label: 'Jméno', type: 'text' },
      userPassword: { label: 'Heslo', type: 'password' },
    },
    async authorize(credentials) {
      if (!credentials) return null;

      const userAuthRecords = await getUserAuthRecords();
      const userAuthRecord = getUserAuthRecordByPassword(credentials, userAuthRecords);

      if (!userAuthRecord) return null;

      return {
        id: userAuthRecord.recordId.toString(),
        name: userAuthRecord.user.name,
        email: userAuthRecord.user.email,
      };
    },
  }),
);

export const authOptions = {
  providers,
  secret,
  theme: {
    colorScheme: 'light',
  },
} satisfies NextAuthOptions;

export function auth(
  ...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, authOptions);
}
