import {
  Dialog,
  DialogContent,
//   DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputText from "@/components/formInputs/TextInput"
import { Form } from "@/components/ui/form"

const LoginSchema = z.object({
  username: z.string()
    .min(3, { message: "user name must have at least 3 characters" })
    .max(50, { message: "user name cannot be this long" }),
  password: z.string()
    .min(5, { message: "password too short" })
    .max(50, { message: "password too long" }),
});

export default function Login() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  });
  const onSubmit = (data : z.infer<typeof LoginSchema>) => {
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger className="w-full p-3 text-sm border-2 border-secondary hover:text-foreground hover:bg-primary font-bold rounded-full text-primary mt-2">
          SIGN IN
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-center uppercase">Sign in to X</DialogTitle>
          {/* <DialogDescription> */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <InputText form={form} label="Enter Username" desc="" placeholder="username" formKey="username"/>
                <InputText form={form} label="Enter Password" type="password" desc="" placeholder="Password" formKey="password"/>
                <Button type="submit" variant="outline" className="hover:bg-primary hover:text-white w-full">Login</Button>
              </form>
            </Form>
          {/* </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
