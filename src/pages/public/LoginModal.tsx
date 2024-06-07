import {
  Dialog,
  DialogContent,
//   DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputText from "@/components/formInputs/TextInput"
import { Form } from "@/components/ui/form"
import {LoginSchema, type LoginType} from "@/types/Auth.model"
import { useLoginUserMutation } from "@/lib/store/api/authApi"
import { useAppDispatch }  from "@/lib/store/store"
import { settingAlert } from "@/lib/store/slices/uiItemsSlice"

export default function Login() {
  const [loginUser] = useLoginUserMutation()
  const dispatch = useAppDispatch()

  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  });
  const onSubmit = async (data : LoginType) => {
    const results = await loginUser(data)
    console.log(results)
    if(results?.error?.data?.message) {
      dispatch(settingAlert({description: results.error.data.message}))
    }
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
