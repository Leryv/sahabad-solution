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
      <div className="grid py-32 px-8 gap-2">
        <h1 className="text-2xl font-medium">Promo</h1>
        <h2 className="text-xl font-regular text-muted-foreground sm:flex lg:flex lg:flex-1">
          Dapatkan Penawaran Menarik
        </h2>
        <Card className="max-w-2xl bg-white mt-8 shadow-xl ">
          <CardHeader>
            <CardTitle>Spring Break Specials</CardTitle>
            <CardDescription>
              Nikmati diskon 15% untuk berbagai produk dan layanan favorit Anda.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>Halo</Button>
          </CardFooter>
        </Card>
      </div>
    </Container>
  );
}
