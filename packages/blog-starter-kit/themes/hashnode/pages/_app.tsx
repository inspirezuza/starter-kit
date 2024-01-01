import { withUrqlClient } from 'next-urql';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

import { GlobalFontVariables } from '../components/fonts';
import { getUrqlClientConfig } from '../lib/api/client';
import '../styles/index.css';

import { Fragment } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<GlobalFontVariables />
			<NextUIProvider>
				<NextThemesProvider attribute="class" defaultTheme="dark">
					<Component {...pageProps} />{' '}
				</NextThemesProvider>
			</NextUIProvider>
		</Fragment>
	);
}

// `withUrqlClient` HOC provides the `urqlClient` prop and takes care of restoring cache from urqlState
// this will provide ssr cache to the provider and enable to use `useQuery` hook on the client side
export default withUrqlClient(getUrqlClientConfig, { neverSuspend: true })(MyApp);
