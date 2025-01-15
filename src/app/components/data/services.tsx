export interface ServiceContent {
    id: string;
    title: string;
    menu: string;
    serviceName: string;
    subItem: string;
    description: string;
    heroImage: string;
    planningImage: string;
    planningTitle: string;
    planningDescription: string;
  }
  
  export const services: Record<string, ServiceContent> = {
    "web-development": {
      id: "web-development",
      title: "WEB DEVELOPMENT",
      menu : "services",
      serviceName: "software-development",
      subItem: "web-development",
      description: "Need a powerful website that stands out from the crowd? Our web development team creates responsive, fast-loading websites that drive results. Using cutting-edge technologies like Next.js, React, and modern backend solutions, we build scalable web applications that grow with your business.",
      heroImage: "/placeholder.svg?height=400&width=800",
      planningImage: "/placeholder.svg?height=300&width=400",
      planningTitle: "DEVELOPMENT PROCESS",
      planningDescription: "Our development process follows industry best practices with thorough planning, agile development cycles, and rigorous testing to ensure quality."
    },
    "graphic-designing": {
      id: "graphic-designing",
      title: "GRAPHIC DESIGNING",
      menu : "services",
      serviceName: "software-development",
      subItem: "graphic-designing",
      description: "Transform your brand's visual identity with our expert graphic design services. From logos to marketing materials, we create stunning designs that capture attention and communicate your message effectively.",
      heroImage: "/placeholder.svg?height=400&width=800",
      planningImage: "/placeholder.svg?height=300&width=400",
      planningTitle: "DESIGN APPROACH",
      planningDescription: "Our design process begins with understanding your brand and objectives, followed by creative conceptualization and iterative refinement."
    },
    "digital-marketing": {
      id: "digital-marketing",
      title: "DIGITAL MARKETING",
      menu : "services",
      serviceName: "software-development",
      subItem: "digital-marketing",
      description: "Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BctUl55OgZXJfmWuYKmGttEdG2RkkL.png",
      planningImage: "/placeholder.svg?height=300&width=400",
      planningTitle: "PLANNING & STRATEGY",
      planningDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    "seo-content": {
      id: "seo-content",
      title: "SEO & CONTENT WRITING",
      menu : "services",
      serviceName: "software-development",
      subItem: "seo-content",
      description: "Boost your online visibility and drive organic traffic with our comprehensive SEO and content writing services. We combine technical SEO expertise with compelling content creation to help you rank higher in search results.",
      heroImage: "/placeholder.svg?height=400&width=800",
      planningImage: "/placeholder.svg?height=300&width=400",
      planningTitle: "CONTENT STRATEGY",
      planningDescription: "Our content strategy combines SEO best practices with engaging storytelling to create content that ranks and converts."
    },
    "app-development": {
      id: "app-development",
      title: "APP DEVELOPMENT",
      menu : "services",
      serviceName: "software-development",
      subItem: "app-development",
      description: "Turn your app idea into reality with our expert mobile app development services. We create native and cross-platform applications that deliver exceptional user experiences across all devices.",
      heroImage: "/placeholder.svg?height=400&width=800",
      planningImage: "/placeholder.svg?height=300&width=400",
      planningTitle: "DEVELOPMENT LIFECYCLE",
      planningDescription: "From concept to deployment, our app development process ensures your application is built to the highest standards of quality and performance."
    },
    "ui-ux": {
      id: "ui-ux",
      title: "UI/UX DESIGNING",
      menu : "services",
      serviceName: "software-development",
      subItem: "ui-ux",
      description: "Create intuitive and engaging user experiences with our UI/UX design services. We combine user research, interaction design, and visual aesthetics to build interfaces that users love.",
      heroImage: "/placeholder.svg?height=400&width=800",
      planningImage: "/placeholder.svg?height=300&width=400",
      planningTitle: "DESIGN SYSTEM",
      planningDescription: "Our UI/UX process focuses on creating consistent, user-centered designs that enhance user satisfaction and achieve business goals."
    }
  };
  
  export const serviceLinks = [
    { id: "website-development", name: "Website Development", href: "/services/software-development/web-development" },
    { id: "graphic-designing", name: "Graphic Designing", href: "/services/software-development/graphic-designing" },
    { id: "digital-marketing", name: "Digital Marketing", href: "/services/software-development/digital-marketing" },
    { id: "seo-content", name: "SEO & Content Writing", href: "/services/software-development/seo-content" },
    { id: "app-development", name: "App Development", href: "/services/software-development/app-development" },
    { id: "ui-ux", name: "UI/UX Designing", href: "/services/software-development/ui-ux" },
  ];
  
  