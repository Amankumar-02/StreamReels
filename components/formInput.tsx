// "use client";

// import {
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormDescription,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// export function FormInput({
//   componentProps,
// }: {
//   componentProps: {
//     form: any;
//     label: string;
//     name: string;
//     placeholder?: string;
//     type?: string;
//     description?: string;
//   };
// }) {
//   const { form, label, name, placeholder, type="text", description } = componentProps;
//   return (
//     <FormField
//       control={form.control}
//       name={name}
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>{label}</FormLabel>
//           <FormControl>
//             <Input placeholder={placeholder} type={type} {...field} />
//           </FormControl>
//           {description && <FormDescription>{description}</FormDescription>}
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// }


import React from 'react'

function FormInput() {
  return (
    <div>FormInput</div>
  )
}

export default FormInput