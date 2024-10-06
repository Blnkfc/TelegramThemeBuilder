import useStore from "../../../../store.jsx";
import { useContextMenu } from "react-contexify";
import ContextMenu from "../../ContextMenu/ContextMenu.jsx";

const MENU_ID = "menu-id";
const KEY = 'name'

const ContactList = () => {
    const {colors} = useStore()
    const color = colors.filter((c) => c.key == 'name')[0]?.value
    console.log(`current color is ${JSON.stringify(color)}`)

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
            <ContextMenu colorKey={KEY} />
        </>
    )
}


export default ContactList