import React from "react";
import { Button as Classic } from '@/components/ui/button'

interface Button {
  name: String;
}
function Button({ name }: Button) {
  return (
    <Classic className="bg-green-600 hover:bg-green-500">{name}</Classic>
  );
}

export default Button;
