import StudentPage from "@/components/students/StudentPage";
import { DEVELOPER, studentMetadata } from "@/components/students/content";

export const metadata = studentMetadata(DEVELOPER);

export default function Page() {
  return <StudentPage content={DEVELOPER} />;
}
