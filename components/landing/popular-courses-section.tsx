"use client"

import { useState, useMemo, useCallback } from "react"
import { CourseCard } from "@/components/landing/course-card"
import { SortDropdown } from "@/components/landing/sort-dropdown"
import type { PopularCourse, SortOption } from "@/types/landing"

const COURSES: PopularCourse[] = [
  {
    id: "marketing-01",
    title: "Learn Marketing From Top Instructors.",
    image: "/images/course-marketing.png",
    rating: 4.5,
    duration: "6 weeks",
    students: 1500,
    studentsLabel: "1.5k Students",
    price: 30.5,
  },
  {
    id: "frontend-01",
    title: "Front-End Development Is Not Hard As You Think",
    image: "/images/course-frontend.png",
    rating: 4.5,
    duration: "6 weeks",
    students: 1500,
    studentsLabel: "1.5k Students",
    price: 30.5,
  },
  {
    id: "ux-01",
    title: "Everything You Need To Know In UX",
    image: "/images/course-ux.png",
    rating: 4.5,
    duration: "6 weeks",
    students: 1500,
    studentsLabel: "1.5k Students",
    price: 30.5,
  },
  {
    id: "photography-01",
    title: "Learn Photography With Ease",
    image: "/images/course-photography.png",
    rating: 4.5,
    duration: "6 weeks",
    students: 1500,
    studentsLabel: "1.5k Students",
    price: 30.5,
  },
  {
    id: "data-01",
    title: "Be A Pro In Data Analysis",
    image: "/images/course-data.png",
    rating: 4.5,
    duration: "6 weeks",
    students: 1500,
    studentsLabel: "1.5k Students",
    price: 30.5,
  },
  {
    id: "hacking-01",
    title: "Ethical Hacking Is Not Hard As You Think",
    image: "/images/course-hacking.png",
    rating: 4.5,
    duration: "6 weeks",
    students: 1500,
    studentsLabel: "1.5k Students",
    price: 30.5,
  },
]

function sortCourses(courses: PopularCourse[], sortBy: SortOption) {
  const sorted = [...courses]

  switch (sortBy) {
    case "name":
      return sorted.sort((a, b) => a.title.localeCompare(b.title))
    case "price":
      return sorted.sort((a, b) => a.price - b.price)
    case "students":
      return sorted.sort((a, b) => b.students - a.students)
    default:
      return sorted
  }
}

export function PopularCoursesSection() {
  const [sortBy, setSortBy] = useState<SortOption>("name")

  const handleSortChange = useCallback((value: SortOption) => {
    setSortBy(value)
  }, [])

  const sortedCourses = useMemo(
    () => sortCourses(COURSES, sortBy),
    [sortBy]
  )

  return (
    <section
      className="py-10 md:py-16"
      aria-labelledby="popular-courses-heading"
    >
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2
            id="popular-courses-heading"
            className="font-heading text-xl font-bold text-foreground md:text-2xl"
          >
            Most Popular Courses
          </h2>
          <SortDropdown value={sortBy} onChange={handleSortChange} />
        </div>

        {/* Course Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {sortedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
