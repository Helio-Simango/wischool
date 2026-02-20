import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesBar } from "@/components/landing/features-bar"
import { CategoriesSection } from "@/components/landing/categories-section"
import { PopularCoursesSection } from "@/components/landing/popular-courses-section"
import { SkillCoursesSection } from "@/components/landing/skill-courses-section"
import { EducationSection } from "@/components/landing/education-section"
import { ReviewsSection } from "@/components/landing/reviews-section"
import { InstructorsSection } from "@/components/landing/instructors-section"
import { CtaBannerSection } from "@/components/landing/cta-banner-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesBar />
        <CategoriesSection />
        <PopularCoursesSection />
        <SkillCoursesSection />
        <EducationSection />
        <ReviewsSection />
        <InstructorsSection />
        <CtaBannerSection />
      </main>
      <Footer/>
    </>
  )
}