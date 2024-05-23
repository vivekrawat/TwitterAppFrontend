import React, { ReactNode, useEffect, useState } from 'react';
import image from '@/assets/images/white-icon.png'
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [XLogoVisible, setXLogoVisibility] = useState(true)
  useEffect(() => {
    setTimeout(() => {
        setXLogoVisibility(false)
    }, 1500);
  },[])
  return (
    <div className="">
      {XLogoVisible && 
      <div className="fixed top-0 left-0 flex h-screen w-screen bg-background">
        <img className="mx-auto my-auto h-40 w-40" src={image} alt="" />
      </div>}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
