"use client";

import { title } from "@/components/primitives";
import { User } from "@heroui/react" ; 

export default function BlogPage() {
  return (
    <div>
    <section>
      <h1 className={title()}>Nosotros</h1>
      <h1>coma toche</h1>
    </section>     
      
      <User
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}

      description="Product Designer"
      name="Amanda Lee"
      />
    </div>
  );
}
