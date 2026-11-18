import StudentPage from "@/components/students/StudentPage";
import { HUB, studentMetadata } from "@/components/students/content";

export const metadata = studentMetadata(HUB);

export default function Page() {
  return <StudentPage content={HUB} />;
}
