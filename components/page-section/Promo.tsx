import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Promo() {
  return (
    <Container>
      <div id="promo" className="grid py-18 px-8 gap-2 ">
        <h1 className="text-2xl md:text-3xl text-gray-800 font-medium">
          Promo
        </h1>
        <h2 className=" font-regular text-muted-foreground sm:flex lg:flex lg:flex-1">
          Dapatkan Penawaran Menarik
        </h2>
        <Card className="max-w-2xl bg-white mt-8 shadow-xl ">
          <CardHeader>
            <CardTitle>Spring Break Specials</CardTitle>
            <CardDescription>
              Nikmati diskon 15% untuk berbagai produk dan layanan favorit Anda.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-start">
            <Button className="text-sm/6 font-semibold bg-accent-blue-500 text-white hover:bg-white hover:text-accent-blue-500">
              Contact Us
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Container>
  );
}
