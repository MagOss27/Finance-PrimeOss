"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Plus } from "lucide-react";
import { columns, Payment } from "./columns";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@teste",
  },
  {
    id: "728ed52f",
    amount: 50,
    status: "success",
    email: "f@teste",
  },
];

const AccountsPage = () => {
  const newAccount = useNewAccount();

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -m-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
          <Button
            onClick={newAccount.onOpen}
            size="sm"
            className="w-full lg:w-auto"
          >
            <Plus className="size-4 mr-2 " />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable filterKey="email" columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;


//3:48:26