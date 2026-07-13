import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Kontakt() {
  redirect(
    "https://wa.me/4917624050812?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren."
  );
}
