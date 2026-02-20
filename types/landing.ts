export type NavLink = {
  label: string
  href: string
}

export type FeatureItem = {
  icon: React.ReactNode
  label: string
}

export type InstructorAvatar = {
  src: string
  alt: string
}

export type CourseCategory = {
  name: string
  image: string
  description: string
}

export type PopularCourse = {
  id: string
  title: string
  image: string
  rating: number
  duration: string
  students: number
  studentsLabel: string
  price: number
}

export type SortOption = "name" | "price" | "students"
