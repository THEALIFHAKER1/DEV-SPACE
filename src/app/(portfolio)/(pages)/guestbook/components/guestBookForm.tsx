import { auth } from "@/auth";
import { FormIn, FormOut } from "./Form";

export default async function GuestbookForm() {
  let session = await auth();

  return session?.user ? (
    <>
      <FormIn />
    </>
  ) : (
    <>
      <FormOut />
    </>
  );
}
