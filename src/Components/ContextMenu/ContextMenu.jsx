import { useEffect, useState } from "react"
import useStore from "../../../store.jsx"
import { ChromePicker } from 'react-color';
import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import './ContextMenu.css';





const ContextMenu = () => {
    const MENU_ID = "menu-id";
    const setColor = useStore((state) => state.setColor)
    const initialColor = useStore((state) => state.color)
    const [newColor, setNewColor] = useState('#000')

    const { show } = useContextMenu({
        id: MENU_ID
    });

    function handleItemClick({ event, props, triggerEvent, data }){
        console.log(event, props, triggerEvent, data );
      }

    useEffect(() => {
        console.log(initialColor)
    }, [initialColor])

    const handleChangeComplete = (color) => {
        setColor(color.hex)
    }

    return (
        <Menu id={MENU_ID} >
            <Item closeOnClick={false} onClick={handleItemClick} >
                <ChromePicker
                    color={initialColor}
                    onChangeComplete={handleChangeComplete}
                />
            </Item>
        </Menu>
    )
}

export default ContextMenu