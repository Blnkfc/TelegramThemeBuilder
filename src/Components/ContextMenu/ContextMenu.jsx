import { useEffect, useState } from "react"
import useStore from "../../../store.jsx"
import { PhotoshopPicker } from 'react-color';
import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import './ContextMenu.css';





const ContextMenu = ({colorKey}) => {
    const MENU_ID = "menu-id";
    const {colors, setColor} = useStore()
    const initialColor = colors.filter((c) => c.key == colorKey)[0]?.value
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
        setColor(colorKey, color.hex)
    }

    return (
        <Menu id={MENU_ID} >
            <Item closeOnClick={false} onClick={handleItemClick} >
                <PhotoshopPicker
                    color={initialColor}
                    onChangeComplete={handleChangeComplete}
                />
            </Item>
        </Menu>
    )
}

export default ContextMenu