import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import { BiMenu } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
const MobMenu = () => {
    return (
        <div className="flex md:hidden">
            <Menu>
                {({ isOpen }) => (
                    <>
                        <MenuButton isActive={isOpen} as={Button}>
                            {isOpen ? <RiCloseFill size={25} /> : <BiMenu size={25} />}
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={NavLink} to={"/"} className='font-bold text-navcol'>Home</MenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>
        </div>
    );
};
export default MobMenu;