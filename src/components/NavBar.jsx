import {Navbar, NavbarContent, NavbarItem, Link,Input}  from "@nextui-org/react";
import {  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { FaSearch } from 'react-icons/fa';

export default function NavBar({navBar}) {
  return (
    <Navbar isBordered  justify="start" style={{borderBottom:'1px solid black',backgroundColor:'#d7b1bc'}}>
      <NavbarContent className="hidden sm:flex gap-3" style={{marginLeft:'-10vw'}} >
     {navBar.map((item, index) => (
          <NavbarItem key={index} isActive={index === 0}>
            <Link href={item.href}   style={{ color: 'black', fontWeight: index === 0 ? 'bolder' : 'normal' }}>
              {item.menuItem}
            </Link>
          </NavbarItem>
      ))}
      </NavbarContent>

     <NavbarContent as="div" className="items-center" justify="center">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<FaSearch size={18} />}
          type="search"
        />
         <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://cdn-icons-png.flaticon.com/512/189/189001.png"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </NavbarContent> 
    </Navbar>
  );
}