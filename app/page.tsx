import dynamic from "next/dynamic";
import { ToDoListSection } from "./features/todo/components/ToDoListSection";

const HomeShell = dynamic(() => import("./components/HomeShell"), {
  ssr: false,
});

export default function Home() {
  return (
    <HomeShell>
      <ToDoListSection />
    </HomeShell>
  );
}
