import { Header } from "./Header";
import { Modal } from "./Modal";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
	return (
		<div>
			<Modal />
			<Header />
			<Menu />
			{children}
			<Footer />
		</div>
	)
}