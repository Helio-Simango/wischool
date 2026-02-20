"use client"

import Image from "next/image"
import { Star, Clock, Users } from "lucide-react"
import type { PopularCourse } from "@/types/landing"

type CourseCardProps = {
  course: PopularCourse
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-4">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-1 sm:gap-2">
          <h3 className="font-heading text-xs font-bold leading-snug text-card-foreground sm:text-base">
            {course.title}
          </h3>
          <span className="flex shrink-0 items-center gap-0.5 text-[10px] text-muted-foreground sm:gap-1 sm:text-sm">
            <Star className="h-3 w-3 text-muted-foreground sm:h-4 sm:w-4" />
            {course.rating}
          </span>
        </div>

        {/* Meta + Price */}
        <div className="mt-2 flex items-center justify-between sm:mt-3">
          <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground sm:gap-3 sm:text-xs">
            <span className="flex items-center gap-0.5 sm:gap-1">
              <Clock className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
              {course.duration}
            </span>
            <span className="flex items-center gap-0.5 sm:gap-1">
              <Users className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
              {course.studentsLabel}
            </span>
          </div>
          <span className="font-heading text-sm font-bold text-primary sm:text-lg">
            {course.price}$
          </span>
        </div>
      </div>
    </article>
  )
}
