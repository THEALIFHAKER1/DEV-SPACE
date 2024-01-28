"use client";

import Link from "next/link";

import { Button } from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface FormInputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  control: any;
  disabled?: boolean;
  subLinkHref?: string;
  subLinkLabel?: string;
  className?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  label,
  name,
  type,
  placeholder,
  control,
  disabled,
  subLinkHref,
  subLinkLabel,
  className,
  onchange,
}: FormInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type={type}
              disabled={disabled}
              className={className}
            />
          </FormControl>
          {subLinkHref && subLinkLabel && (
            <Button variant={"link"} asChild className="px-0">
              <Link href={subLinkHref}>{subLinkLabel}</Link>
            </Button>
          )}
          <FormMessage></FormMessage>
        </FormItem>
      )}
    />
  );
}
