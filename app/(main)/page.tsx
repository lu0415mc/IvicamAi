import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
   <div>
    home page
    <Button>
    <Link href="/sign-up">Register</Link>


    </Button>
    <Button>

    <Link href="/sign-in">login</Link>
    </Button>
    </div>

  );
}
