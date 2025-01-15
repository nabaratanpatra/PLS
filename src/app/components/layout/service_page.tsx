// // pages/[menu]/[serviceName]/[subItem].tsx
// import { useRouter } from 'next/router'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Phone } from 'lucide-react'
// import { ServiceContent, serviceLinks, services } from '../data/services'
// import { GetServerSidePropsContext } from 'next'

// interface ServicePageProps {
//   service: ServiceContent | null
// }

// const ServicePage = ({ service }: ServicePageProps) => {
//   const router = useRouter()
//   const { menu, serviceName, subItem } = router.query

//   if (!service) {
//     return <div>Service not found or loading...</div> // or handle error if service is not found
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid gap-8 lg:grid-cols-[1fr,400px]">
//           {/* Main Content */}
//           <main>
//             {/* Hero Section */}
//             <div className="mb-8">
//               <Image
//                 src={service.heroImage || '/placeholder.svg'}
//                 alt={`${service.title} Hero Image`}
//                 width={800}
//                 height={400}
//                 className="mb-6 rounded-lg"
//               />
//               <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
//                 {service.title}
//               </h1>
//               <p className="text-gray-600">{service.description}</p>
//             </div>

//             {/* Planning & Strategy Section */}
//             <div className="grid gap-6 md:grid-cols-2 md:items-center">
//               <Image
//                 src={service.planningImage || '/placeholder.svg'}
//                 alt={service.planningTitle}
//                 width={400}
//                 height={300}
//                 className="rounded-lg"
//               />
//               <div>
//                 <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
//                   {service.planningTitle}
//                 </h2>
//                 <p className="text-gray-600">{service.planningDescription}</p>
//               </div>
//             </div>
//           </main>

//           {/* Sidebar */}
//           <aside className="space-y-8">
//             {/* Services Links */}
//             <div className="rounded-lg bg-gray-50 p-6">
//               <h2 className="mb-4 text-xl font-bold text-gray-900">ALL SERVICES</h2>
//               <nav className="space-y-2">
//                 {serviceLinks.map((serviceLink) => (
//                   <Link
//                     key={serviceLink.id}
//                     href={serviceLink.href}
//                     className={`flex items-center justify-between rounded-lg p-3 transition-colors ${
//                       serviceLink.id === service.id
//                         ? 'bg-yellow-500 text-white'
//                         : 'hover:bg-gray-100'
//                     }`}
//                   >
//                     {serviceLink.name}
//                     {serviceLink.id === service.id && <span className="text-white">→</span>}
//                   </Link>
//                 ))}
//               </nav>
//             </div>

//             {/* Contact Box */}
//             <div className="rounded-lg bg-gray-900 p-6 text-white">
//               <h2 className="mb-4 text-xl font-bold">NEED HELP?</h2>
//               <p className="mb-6 text-gray-300">
//                 Prefer speaking with a human? Call us at the corporate office.
//               </p>
//               <div className="flex items-center gap-2">
//                 <Phone className="h-5 w-5 text-yellow-500" />
//                 <span className="text-xl font-bold text-yellow-500">666 888 000</span>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   )
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { menu, serviceName, subItem } = context.params as { menu: string, serviceName: string, subItem: string }

//   // Fetch the service data based on the dynamic parameters (menu, serviceName, subItem)
//   const service = services[serviceName] || null

//   // If service not found, return 404
//   if (!service) {
//     return {
//       notFound: true,
//     }
//   }

//   return { props: { service } }
// }

// export default ServicePage

import { GetServerSidePropsContext } from 'next';
import { services } from '../data/services';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { menu, serviceName, subItem } = context.params as { menu: string, serviceName: string, subItem: string };

  // Find the service that matches the dynamic parameters
  const service = Object.values(services).find(
    (service) => service.menu === menu && service.serviceName === serviceName && service.subItem === subItem
  ) || null;

  // If service is not found, return 404
  if (!service) {
    return {
      notFound: true,
    };
  }

  return { props: { service } };
}
