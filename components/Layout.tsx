import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
	return (
		<div>
			<Header />
			<Menu />
			<div className="max-w-7xl m-auto p-2 pl-18 ">
				{children}
			</div>
			<Footer />
		</div>
	)
}