import StudentPage from "@/components/students/StudentPage";
import { CREATOR, studentMetadata } from "@/components/students/content";

export const metadata = studentMetadata(CREATOR);

export default function Page() {
  return <StudentPage content={CREATOR} />;
}
