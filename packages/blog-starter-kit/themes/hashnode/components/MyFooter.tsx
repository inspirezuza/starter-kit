import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useAppContext } from './contexts/appContext';
import PublicationSocialLinks from './publication-social-links';

type Props = {
	currentMenuId?: string | null;
	isHome: boolean;
};

export default function MyFooter(props: Props) {
	const { publication } = useAppContext();
	return (
		<>
			<div className=" blog-footer-area -mt-px border-t bg-slate-100 px-5 py-4 text-center text-slate-800 dark:border-slate-800 dark:bg-black dark:text-slate-500 md:px-10 ">
				<div className="flex flex-1 justify-between px-6 align-middle text-slate-600 dark:text-slate-100">
					<div className="flex gap-4">
						<Link href={''}>
							<div className="dark:text-cyan py-2 text-xl font-bold text-teal-400 ">Faytodot</div>
						</Link>
					</div>
					<div className="flex gap-1">
						<PublicationSocialLinks links={publication.links} />
						<div className="py-1">
							<ThemeSwitcher />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
