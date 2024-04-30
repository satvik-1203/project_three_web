import React from "react";
import View from "./view";
import { prisma } from "#/prisma.config";
import { cookies } from "next/headers";

interface Props {}

const page: React.FC<Props> = async () => {
  const paintings = await prisma.painting.findMany({});

  const username = cookies().get("username")!.value;
  return (
    <div className="">
      <View username={username} paintings={paintings} />
    </div>
  );
};

export default page;
