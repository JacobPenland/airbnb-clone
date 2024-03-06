'use client';

import { FC } from "react";

interface MenuItemProp {
  onClick: () => void;
  label: string;
}

const MenuItem: FC<MenuItemProp> = ({
  onClick,
  label
}) => {
  return (
    <div
      onClick={onClick}
      className="
        px-4
        py-3
        hover:bg-neutral-100
        transition
        font-semibold
      "
    >
      {label}
    </div>
  )
}

export default MenuItem
