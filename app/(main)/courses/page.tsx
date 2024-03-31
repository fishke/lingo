import { getCourses, getUserProgress } from "@/db/queries";
import { CoursesList } from "./CoursesList";

export default async function CoursesPage() {
  const courses = await getCourses();
  const userProgress = await getUserProgress();

  console.log({ courses, userProgress });

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <CoursesList
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
}
