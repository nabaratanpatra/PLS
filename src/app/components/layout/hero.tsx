'use client'
 
import * as React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
 
interface Slide {
  title: string
  subtitle: string
  image: string
  mobileImage?: string
  reportImage?: string
}
 
const slides: Slide[] = [
  {
    title: "Our e-Publications Have Global Reach",
    subtitle: "Connecting Kashmir's Craft Insights with the World",
    image: "/assets/footerImages/comp.png"
  },
  {
    title: "Reviving Heritage, Connecting Artisans",
    subtitle: "Foundation's Journey to Build the Largest Craft Network",
    image: "/assets/footerImages/comp.png?height=1080&width=1920"
  },
  {
    title: "Empowering Local Artisans",
    subtitle: "Bridging Tradition with Modern Markets",
    image: "/assets/footerImages/comp.png?height=1080&width=1920"
  },
  {
    title: "Sustainable Craftsmanship",
    subtitle: "Preserving Skills for Future Generations",
    image: "/assets/footerImages/comp.png?height=1080&width=1920"
  },
  {
    title: "Global Impact, Local Touch",
    subtitle: "Bringing Kashmir's Art to the World Stage",
    image: "/assets/footerImages/comp.png?height=1080&width=1920"
  }
]
 
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
 
  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])
 
  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])
 
  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 2000)
 
    return () => clearInterval(timer)
  }, [nextSlide])
 
  return (
<div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
<div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
>
          {/* Background Image */}
<div className="absolute inset-0">
<Image
              src={slide.image || '/placeholder.svg'}
              alt=""
              fill
              className="object-cover"
              priority
            />
<div className="absolute inset-0 bg-[#8B3E16] bg-opacity-60" />
</div>
 
          {/* Content */}
<div className="relative h-full container mx-auto px-4 flex items-center">
<div className="max-w-4xl">
              {index === 0 && (
<div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Mobile Preview */}
<div className="relative h-[500px] md:h-[600px]">
                    {slide.mobileImage && (
<Image
                        src={slide.mobileImage}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    )}
</div>
                  {/* Text Content */}
<div className="md:col-span-2">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
</h1>
<p className="text-xl text-white/90 mb-8">
                      {slide.subtitle}
</p>
<Button
                      variant="default"
                      size="lg"
                      className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90"
>
                      DISCOVER MORE
</Button>
</div>
</div>
              )}
 
              {index !== 0 && (
<div className="max-w-3xl">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
</h1>
<p className="text-xl text-white/90 mb-8">
                    {slide.subtitle}
</p>
<Button
                    variant="default"
                    size="lg"
                    className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90"
>
                    DISCOVER MORE
</Button>
</div>
              )}
</div>
</div>
</div>
      ))}
 
      {/* Navigation */}
<div className="absolute bottom-8 right-8 flex space-x-4">
<Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/10 border-white/20 hover:bg-white/20"
>
<ChevronLeft className="h-4 w-4 text-white" />
</Button>
<Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/10 border-white/20 hover:bg-white/20"
>
<ChevronRight className="h-4 w-4 text-white" />
</Button>
</div>
 
      {/* Slide Indicators */}
<div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {slides.map((_, index) => (
<button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white h-8' : 'bg-white/50'
            }`}
          />
        ))}
</div>
</div>
  )
}