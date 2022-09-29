import React from "react";

type Props = { title: string };

function PageTitle({ title }: Props) {
  return <h3 className="text-center uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">{title}</h3>;
}

export default PageTitle;
