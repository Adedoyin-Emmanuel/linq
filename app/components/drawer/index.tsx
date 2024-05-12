"use client";
import React from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";

interface DrawerProps {
  className?: string;
  title: string;
  description: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: any;
  hideCloseButton?: boolean;
  customFooterChildren?: React.ReactNode;
}

const LinqDrawer = ({
  className,
  title,
  description,
  isOpen,
  children,
  setIsOpen,
  hideCloseButton,
  customFooterChildren,
}: DrawerProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-start">{title}</DialogTitle>
            <DialogDescription className="text-start">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className={`${className}`}>{children}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>
        <div className="mx-auto w-full ">
          <DrawerHeader>
            <DrawerTitle className="text-start">{title}</DrawerTitle>
            <DrawerDescription className="text-start">
              {description}
            </DrawerDescription>
          </DrawerHeader>

          <div className={`p-4 pb-0 ${className}`}>{children}</div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default LinqDrawer;
