import {
    Dialog,
    DialogContent,
  //   DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
//   import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useForm } from "react-hook-form";
  import InputText from "@/components/formInputs/TextInput"
  import { Form } from "@/components/ui/form"
  import {RegisterSchema, type RegisterType} from "@/types/Auth.model"
  import { useRegisterUserMutation } from "@/lib/store/api/authApi"

  export default function Register() {
    const [ registerUser ] = useRegisterUserMutation()
    const form = useForm<RegisterType>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
        username: "",
        password: "",
        email: "",
        fullname: ""
      },
    });
    const onSubmit = (data : RegisterType) => {
      console.log(data)
      registerUser(data)
    }
  
    return (
      <Dialog>
        <DialogTrigger className="w-full p-3 text-sm border-2 uppercase border-secondary bg-primary text-foreground font-bold rounded-full mt-2">
            Register
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-center uppercase">Register to X</DialogTitle>
            {/* <DialogDescription> */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <InputText form={form} label="Enter Email" desc="" placeholder="example@gmail.com" formKey="email"/>
                  <InputText form={form} label="Enter Full Name" desc="" placeholder="full name" formKey="fullname"/>
                  <InputText form={form} label="Enter Username" desc="" placeholder="username" formKey="username"/>
                  <InputText form={form} label="Enter Password" type="password" desc="" placeholder="Password" formKey="password"/>
                  <Button type="submit" variant="outline" className="hover:bg-primary uppercase hover:text-white w-full">Register</Button>
                </form>
              </Form>
            {/* </DialogDescription> */}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  