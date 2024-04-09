import React from "react";

type Props = {
  type: string;
  id: string;
  label: string;
  value: any;
  name: string;
  placeholder: string;
};

export default function Input({ type, id, label, name, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-1 py-4">
      <label htmlFor={id}>{label}</label>

      <input
        type={type}
        id={id}
        name={name}
        className="bg-gray-200 p-2 rounded-lg placeholder:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}
