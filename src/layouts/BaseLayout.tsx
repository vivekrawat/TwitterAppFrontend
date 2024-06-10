import React, { ReactNode, useEffect, useState } from "react";
import image from "@/assets/images/white-icon.png";
import { Alert, AlertDescription} from "@/components/ui/alert"
import { useAppSelector }  from "@/lib/store/store"
// import { settingAlert } from "@/lib/store/slices/uiItemsSlice"
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [XLogoVisible, setXLogoVisibility] = useState(true);
  const alertState = useAppSelector(state => state.uiItems.alert)
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(settingAlert({description: 'this is the alert', title: 'title'}))
  // },[dispatch])
  useEffect(() => {
    setTimeout(() => {
      setXLogoVisibility(false);
    }, 1500);
  }, []);
  return (
    <div className="">
      {XLogoVisible && (
        <div className="fixed z-[9999] top-0 left-0 flex h-screen w-screen bg-background">
          <img className="mx-auto my-auto h-40 w-40" src={image} alt="" />
        </div>
      )}
      <main>{children}</main>
      {alertState?.description && <Alert variant={alertState?.variant as 'default' | 'destructive' | 'success'} className="">
        {/* <AlertTitle className="uppercase">Heads up!</AlertTitle> */}
        <AlertDescription>
          {alertState?.description}
          {/* You can add components and dependencies to your app using the cli. */}
        </AlertDescription>
      </Alert> }
    </div>
  );
};

export default Layout;
