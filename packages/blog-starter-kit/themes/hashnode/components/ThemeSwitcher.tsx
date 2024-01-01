// components/ThemeSwitcher.tsx
import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';

import { MdDarkMode } from 'react-icons/md';

import { MdWbSunny } from 'react-icons/md';

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className="rounded-full ring-blue-600 ring-offset-white hover:bg-black/10 dark:ring-offset-slate-800 dark:hover:bg-white/20">
			<div className="m-2 flex items-center justify-center">
				<Button
					isIconOnly
					color="warning"
					variant="faded"
					aria-label="Take a photo"
					onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
				>
					{theme === 'light' ? (
						<div className="">
							<MdWbSunny style={{ fontSize: '24px' }} />
						</div>
					) : (
						<div className="text-cyan" >
							<MdDarkMode style={{ fontSize: '24px' }} />
						</div>
					)}
				</Button>
				<Button isIconOnly color="danger" aria-label="Like"></Button>
			</div>
		</div>
	);
};
