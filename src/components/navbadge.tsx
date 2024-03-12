"use client";
import { usePathname } from "next/navigation";
import { badgeVariants } from "~/components/ui/badge";
import Link from "next/link";
import React from "react";

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
      className={badgeVariants({
        variant: isOnPath ? "default" : "outline",
      })}
    >
      {props.children}
    </Link>
  );
};

export default NavBadge;
