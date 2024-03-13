"use client";
import { usePathname } from "next/navigation";
import { badgeVariants } from "~/components/ui/badge";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

export type NavBadgeProps = {
  value: string;
  children?: React.ReactNode;
};

const NavBadge = (props: NavBadgeProps) => {
  const path = usePathname();

  const isOnPath =
    props.value === "/" ? path === props.value : path.match(props.value);

  return (
    <Link
      href={props.value}
      className={cn(
        badgeVariants({
          variant: isOnPath ? "default" : "outline",
        }),
        " sm:text-lg",
      )}
    >
      {props.children}
    </Link>
  );
};

export default NavBadge;
