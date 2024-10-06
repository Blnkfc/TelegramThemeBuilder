import useStore from "../../../../store.jsx";
import { useContextMenu } from "react-contexify";
import ContextMenu from "../../ContextMenu/ContextMenu.jsx";

const MENU_ID = "menu-id";

const ContactList = () => {
    const { color } = useStore()

    const { show } = useContextMenu({
        id: MENU_ID
    });

    function displayMenu(e) {
        show({
            event: e,
        });
    }

    return (
        <>
            <div
                className="contactList"
                onContextMenu={displayMenu}
                style={{background: `${color}`}}
            >
                contacts
            </div>
            <ContextMenu />
        </>
    )
}


export default ContactList