import { Home, Search, Bell } from "lucide-react";
import { sidebarItems } from "./SidebarItems";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Sidebar() {
  return (
    <div>
      <ul>
        {sidebarItems.map( item =>
          <li key={item.path} className="bg-success opacity-60 my-2 h-14 w-14 flex mx-1 hover:scale-105 cursor-pointer hover:opacity-100  rounded-md">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="items-center flex w-full">
                  {item.icon === 'home'&& <Home size={28} className="text-center mx-auto" />}
                  {item.icon === 'search'&& <Search size={28} className="text-center mx-auto" />}
                  {item.icon === 'bell'&& <Bell size={28} className="text-center mx-auto" />}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.desc}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        )}
      </ul>
    </div>
  );
}
