import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

interface IMenu {
	username: string;
	onClick: () => void;
}

export const Menu = (props: IMenu) => {
	return (
		<ul className="menu bg-base-200 menu-horizontal w-full flex justify-between">
			<li>
				<a>
					<FaHome />
					Recept
				</a>
			</li>
			<li>
				<button type="button" onClick={props.onClick}>
					<FaPlus /> Nytt recept
				</button>
			</li>
			<li>
				<a>
					<FaRegUser />
				</a>
			</li>
		</ul>
	);
};
