import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="mt-1 block w-full rounded-lg border-gray-600 bg-gray-800/50 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 backdrop-blur-sm"
      />
    </div>
  );
};