import {Button} from "@/components/ui/button"
import Logo from "@/assets/images/white-icon.png"
export default function Home () {
    return (
        <div className="flex lg:h-screen w-screen">
            <div className="grid lg:grid-cols-2 my-auto mx-auto">
            <div>
                <img src={Logo} className="h-full" alt="" />
            </div>
            <div className="flex flex-col justify-evenly px-3 gap-8">
                <h2 className="text-4xl lg:text-6xl font-bold font-serif">Happening Now</h2>
                
                <div className="w-full lg:w-2/3">
                <p className="text-2xl lg:text-3xl font-serif font-bold mb-8">Join Today.</p>
                <Button className="w-full bg-primary font-sans text-foreground uppercase font-bold rounded-full">
                    Create Account
                </Button>
                    <p className="text-xs">
                    By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                    </p>
                </div>
                <div className="w-full lg:w-2/3">
                    <p>Already have an account?</p>
                    <Button className="w-full font-bold rounded-full text-primary" variant="outline">SIGN IN</Button>
                </div>
            </div>
        </div>
        </div>
        
    )
    
}