import React, { ReactNode, useEffect, useState } from "react";
import image from "@/assets/images/white-icon.png";
import { useAppSelector }  from "@/lib/store/store"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Sidebar from "@/components/sidebar/Sidebar.tsx"
  
// import { settingAlert } from "@/lib/store/slices/uiItemsSlice"
interface LayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      <div className="fixed flex justify-between top-0 w-full h-20 bg-secondary px-5">
        <div className="my-auto">
            <img src={image} className="h-14 w-14" alt="" />
        </div>
        <div className="my-auto">
        <Popover>
            <PopoverTrigger className="rounded-full h-14 w-14 bg-primary text-12 hover:scale-110 opacity-80">V</PopoverTrigger>
            <PopoverContent className="w-40">
                <Button className="bg-destructive uppercase w-full">logout</Button>
            </PopoverContent>
        </Popover>
        </div>
      </div>
      <div className="h-full flex mt-20">
        <div className="relative h-full hidden sm:block w-16">
          <div className="fixed w-16 bg-secondary h-screen">
            <Sidebar/>
          </div>
        </div>
        <div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
