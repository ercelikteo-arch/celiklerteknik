import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import WhyUs from '@/components/home/WhyUs'
import BrandLogos from '@/components/home/BrandLogos'
import Products from '@/components/home/Products'
import References from '@/components/home/References'
import ReviewsSlider from '@/components/home/ReviewsSlider'
import BlogPreview from '@/components/home/BlogPreview'
import EnergyCalculator from '@/components/EnergyCalculator'
import CTA from '@/components/home/CTA'
import { LocalBusinessSchema } from '@/components/SchemaMarkup'

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <Services />
      <WhyUs />
      <BrandLogos />
      <Products />
      <References />
      <ReviewsSlider />
      <BlogPreview />
      <EnergyCalculator />
      <CTA />
    </>
  )
}
