import Sidebar from "@/src/components/Sidebar";
import { gilroyBold, gilroyRegular } from "..";
import CourseCard from "@/src/components/CourseCard";
import { Course } from "@/src/interfaces";
import { useState } from "react";
import Pagination from "@/src/components/Pagination";


const courses: Course[] = [
  {
    title: "Introduction",
    description: "In this course, you will learn the basics of crypto trading.",
    duration: 875,
    minutesWatched: 875,
  },
  {
    title: "Crypto trading day by day with the master",
    description: "In this course, you will learn the basics of crypto trading.",
    pdf: "1234",
  },
  {
    title: "Fundamentals",
    description: "In this course, you will learn the basics of crypto trading.",
    duration: 875,
    minutesWatched: 201.25,
  },
  {
    title: "Meeting the market",
    description: "In this course, you will learn the basics of crypto trading.",
    duration: 875,
    minutesWatched: 481.25,
  },
];

function Home() {
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);

  const handlePageChange = (page: number) => {
    console.log("Current page:", page);
  };
  return (
    <Sidebar>
      <div className="ml-10 mr-28 overflow-x-hidden overflow-y-hidden">
        <main className="pb-20 flex flex-col gap-7">
          <div>
            <p className={`${gilroyBold.className} text-4xl`}>Welcome back!</p>
            <p className={`${gilroyRegular.className} text-grey-60`}>
              Continue where you left off!
            </p>
          </div>
          <div className="grid grid-cols-[350px_1fr] gap-10">
            <div className="grid gap-2">
              {courses.map((course, index) => (
                <CourseCard
                  course={course}
                  index={index + 1}
                  key={index}
                  onClick={() => setSelectedCourse(course)}
                  isSelected={selectedCourse?.title === course.title}
                />
              ))}
            </div>
            {selectedCourse && (
              <div className="flex flex-col gap-3">
                <div className="w-full h-full bg-grey-bg rounded-[32px]"></div>
                <div>
                  <p
                    className={`${gilroyBold.className} text-4xl text-ellipsis overflow-hidden line-clamp-1`}
                  >
                    {(courses.indexOf(selectedCourse) + 1)
                      .toString()
                      .padStart(2, "0")}
                    . {selectedCourse.title}
                  </p>
                  <p
                    className={`${gilroyRegular.className} text-ellipsis overflow-hidden line-clamp-1 text-neutral-CC`}
                  >
                    {selectedCourse.description}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-[350px_1fr] gap-10">
            <Pagination totalPages={10} onPageChange={handlePageChange} />
          </div>
        </main>
      </div>
    </Sidebar>
  );
}

export default Home;
