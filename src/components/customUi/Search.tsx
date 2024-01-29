"use client";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import revalidateAllRepositories from "@/lib/actions/AllRepository";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
export function SearchBar({ placeholder }: { placeholder: string }) {
  const SearchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState<string | undefined>(
    SearchParams.get("Search")?.toString()
  );

  const form = useForm();

  function handleSearch() {
    startTransition(() => {
      revalidateAllRepositories();
      const params = new URLSearchParams(SearchParams);
      if (searchTerm) {
        params.set("Search", searchTerm);
      } else {
        params.delete("Search");
      }
      replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearch)}
        className="flex gap-2 dark:bg-neutral-800 bg-neutral-200 p-3 rounded-lg border border-black dark:border-neutral-700"
      >
        <FormField
          control={form.control}
          name="Search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  aria-label={placeholder}
                  value={searchTerm || ""}
                  className="px-2 w-full text-sm rounded-lg h-10 bg-background dark:border-neutral-700"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={placeholder}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="outline"
          type="submit"
          className="dark:border-neutral-700 "
        >
          Search
        </Button>
      </form>
    </Form>
  );
}
