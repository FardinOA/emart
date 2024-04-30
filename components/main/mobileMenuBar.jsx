import React from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { UserCircle } from "lucide-react";

const MobileMenuBar = () => {
    return (
        <Menubar
            className={
                "absolute  border-none right-[8px] rounded-full top-1/2 -translate-y-1/2"
            }
        >
            <MenubarMenu>
                <MenubarTrigger className="    p-0 ">
                    <UserCircle
                        size={30}
                        className="stroke-primary size-full  "
                    />
                </MenubarTrigger>
                <MenubarContent className={"z-[100]  "}>
                    <MenubarItem>Profile</MenubarItem>
                    <MenubarItem>Logout</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default MobileMenuBar;
