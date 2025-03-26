import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tab } from "./ui/tab";
import { Tab2 } from "./ui/tab2";

const Page = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Tab />
        </TabsContent>
        <TabsContent value="password">
          <Tab2 />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
