import React from "react";
import {
//   Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Input {
  form: any;
  formKey: string;
  type?: string;
  label: string;
  desc?: string;
  placeholder?: string;
//   class?: HTMLAttributes["class"];
//   labelclass?: HTMLAttributes["class"];
  validateOnInput?: boolean;
}
const TextInput: React.FC<Input> = ({form, label, desc, placeholder, formKey, type="text"}) => {
  return (
    <FormField
    control={form.control}
    name={formKey}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} type={type} {...field} />
        </FormControl>
        {desc && desc!=='' && <FormDescription>
          {desc}
        </FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
  );
};

export default TextInput;
