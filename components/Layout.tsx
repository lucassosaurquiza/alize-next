import { Header } from "./Header";
import { Modal } from "./Modal";
import { Menu } from "./Menu";

export const Layout = ({ children }: any) => {
	return (
		<div>
			<Header />
			<Menu />
			{children}
			{/* <Modal /> */}
			{/* <Footer /> */}
		</div>
	)
}