import Image from "next/image";

enum QuickLinks {
  HOME = "HOME",
  PARTNERSHIP_PROCESS = "PARTNERSHIP PROCESS",
  PARTNERSHIP = "PARTNERSHIP",
  REGISTRATION = "REGISTRATION",
  APPLICATION_STATUS = "APPLICATION STATUS",
  BOOK_APPOINTMENT = "BOOK APPOINTMENT",
  CONTACT_US = "CONTACT US",
}

enum OurPartnership {
  E_COMMERCE = "E-Commerce",
  BRICK_AND_MORTAR = "Brick And Mortar",
  FRANCHISE = "Franchise",
  IMPORT_EXPORT = "Import Export",
  CONSIGNMENT = "Consignment",
  EXHIBITION = "Exhibition",
}

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-10 w-full">
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center mb-4">
             
              <div className="w-full h-full">
                <Image
                  src="/assets/footerImages/logo.webp"
                  alt="Connect Portal Logo"
                  layout="responsive" // Responsive layout for flexible size
                  className="object-contain"
                  width={100} // Aspect ratio control, not directly the size
                  height={100} // Aspect ratio control, not directly the size
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed flex-wrap">
              Our platform streamlines & forges robust business partnerships,
              and amplifies the visibility of authentic Kashmiri handicrafts in
              the United States. By facilitating direct connections, offering
              comprehensive support, and prioritizing sustainability and fair
              trade, we create a thriving, unparalleled marketplace, by any
              other. With a deep understanding of both Kashmiri craftsmanship
              and the US market, we are the definitive choice for elevating
              Kashmiri handicrafts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {Object.values(QuickLinks).map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Partnership */}
          <div className="col-span-6 md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Our Partnership</h4>
            <ul className="space-y-2">
              {Object.values(OurPartnership).map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-3">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">India:</span> +91 194 313 1113
              </li>
              <li>
                <span className="font-semibold">US:</span> +1 (916) 699-0091
              </li>
              <li>
                <a
                  href="mailto:b2b@dekoshurcrafts.com"
                  className="hover:underline"
                >
                  b2b@dekoshurcrafts.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <h5 className="font-semibold">Corporation Office</h5>
              <p>4445 Corporation Ln Ste 264, Virginia Beach, Virginia 23462</p>
              <h5 className="font-semibold mt-4">Greater DC Address</h5>
              <p>9480 Main St # 1185, Fairfax 22031</p>
              <h5 className="font-semibold mt-4">Kashmir India Office</h5>
              <p>
                2 Gousia Colony Ext Zakura (Opp Industrial Estate) Srinagar
                190006
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="flex items-center justify-center p-8">
          <div className="container p-8 grid grid-cols-12 items-center border-4 border-yellow-700 rounded-lg">
            {/* Social Media Handles */}
            <div className="col-span-12 md:col-span-6 flex space-x-4">
              {[
                {
                  name: "Twitter",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3a9.864 9.864 0 0 1-3.127 1.195A4.917 4.917 0 0 0 16.616 3c-2.72 0-4.92 2.2-4.92 4.917 0 .385.044.76.126 1.122A13.964 13.964 0 0 1 1.675 3.15 4.917 4.917 0 0 0 3.195 9.19a4.892 4.892 0 0 1-2.23-.616v.062c0 2.417 1.718 4.432 4 4.888a4.904 4.904 0 0 1-2.224.084 4.918 4.918 0 0 0 4.6 3.417 9.867 9.867 0 0 1-6.1 2.104c-.395 0-.787-.022-1.175-.067a13.978 13.978 0 0 0 7.548 2.213c9.051 0 14-7.497 14-14 0-.213-.004-.426-.013-.637A9.935 9.935 0 0 0 24 4.557z" />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  name: "Facebook",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.766v2.314h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  name: "Instagram",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.342 3.608 1.316.976.976 1.254 2.243 1.316 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.342 2.633-1.316 3.608-.976.976-2.243 1.254-3.608 1.316-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.342-3.608-1.316-.976-.976-1.254-2.243-1.316-3.608C2.175 15.644 2.163 15.264 2.163 12s.012-3.584.07-4.849c.062-1.366.342-2.633 1.316-3.608.976-.976 2.243-1.254 3.608-1.316C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.013 7.052.07 5.772.127 4.642.362 3.688 1.316 2.734 2.27 2.499 3.4 2.442 4.68.887 7.747 0 8.156 0 12c0 3.844.013 4.253.07 5.532.057 1.28.292 2.41 1.246 3.364.954.954 2.084 1.189 3.364 1.246 1.279.057 1.689.07 5.532.07s4.253-.013 5.532-.07c1.28-.057 2.41-.292 3.364-1.246.954-.954 1.189-2.084 1.246-3.364.057-1.279.07-1.689.07-5.532s-.013-4.253-.07-5.532c-.057-1.28-.292-2.41-1.246-3.364-.954-.954-2.084-1.189-3.364-1.246C15.253.013 14.844 0 12 0zm0 5.838A6.162 6.162 0 1 0 12 18.163 6.162 6.162 0 1 0 12 5.838zm0 10.327a4.165 4.165 0 1 1 0-8.327 4.165 4.165 0 1 1 0 8.327zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  name: "Discord",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.369A19.775 19.775 0 0 0 16.996 3c-.265.488-.567 1.13-.774 1.652a15.816 15.816 0 0 0-4.444 0c-.207-.522-.509-1.164-.774-1.652-1.24.232-2.44.627-3.321 1.015C5.36 5.918 4 8.211 4 12.655c0 2.176.905 4.344 2.084 5.962a16.124 16.124 0 0 0 4.729 1.948c.384-.505.745-1.088 1.056-1.716a15.282 15.282 0 0 0 4.511 0c.311.628.672 1.211 1.056 1.716a16.124 16.124 0 0 0 4.729-1.948c1.179-1.618 2.084-3.786 2.084-5.962 0-4.444-1.36-6.737-3.317-8.655zm-8.203 9.442c-1.178 0-2.14-1.04-2.14-2.327 0-1.287.962-2.328 2.14-2.328s2.14 1.041 2.14 2.328c0 1.287-.962 2.327-2.14 2.327zm6.148 0c-1.178 0-2.14-1.04-2.14-2.327 0-1.287.962-2.328 2.14-2.328s2.14 1.041 2.14 2.328c0 1.287-.962 2.327-2.14 2.327z" />
                    </svg>
                  ),
                  link: "#",
                },
                {
                  name: "Dribbble",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.937 7.768c1.041 1.532 1.608 3.41 1.608 5.232 0 .418-.028.83-.08 1.235-.67-.264-2.636-.878-5.19-.66-.07-.174-.134-.355-.206-.53-.158-.396-.336-.804-.528-1.206 3.128-.926 4.775-2.48 4.396-3.072zm-5.885 2.364c.176.368.34.738.493 1.107a19.66 19.66 0 0 0-5.638.792c-.2-.558-.413-1.1-.637-1.63 1.13-.722 3.065-1.6 5.782-1.352zm.897-2.05c-1.923.476-3.51.816-4.664 1.078-.85-1.6-1.84-3.037-2.945-4.378A9.206 9.206 0 0 1 12 2.797c1.825 0 3.522.54 4.948 1.472-.252.392-1.512 2.18-5 3.813zm-5.53-3.02a20.117 20.117 0 0 1 2.61 3.772c-2.36.48-4.225 1.177-5.472 2.03a9.24 9.24 0 0 1 2.862-5.803zm-2.97 7.346c.324-.217 1.576-1.02 4.674-1.628.203.496.395 1 .572 1.51-.168.045-.336.083-.5.127-2.555.668-4.33 1.635-5.084 2.077a9.086 9.086 0 0 1-.31-2.086zm.96 3.16c.64-.454 2.272-1.413 5.218-2.16.32.844.572 1.716.765 2.6-3.467 1.482-6.375 1.082-7.718.67.44-.345.97-.73 1.735-1.11zm3.66 2.18c-.063-.27-.12-.54-.176-.81 1.28-.34 2.563-.692 3.845-1.06.2.73.364 1.463.497 2.2-1.266.39-2.543.68-3.826.8-.122-.38-.246-.763-.34-1.14zm4.632.8c-.106-.565-.226-1.13-.366-1.696 2.44-.372 4.39-.02 5.12.162-1.3 1.307-3.082 2.185-5.232 2.078zm6.116-2.276c-.93-.24-2.8-.63-5.216-.35a32.222 32.222 0 0 0-.46-1.814 18.65 18.65 0 0 1 5.128.685c-.02.504-.12.992-.286 1.48-.036 0-.1 0-.166-.02zm.344-3.48a19.02 19.02 0 0 0-5.168-.644c-.135-.326-.27-.654-.41-.98 2.26-.416 4.35-.08 5.43.152-.024.5-.1 1-.218 1.472z" />
                    </svg>
                  ),
                  link: "#",
                },
              ].map((social, index) => (
                <a
                  href={social.link}
                  key={index}
                  className="relative group w-10 h-10 rounded-full flex items-center justify-center bg-[#A56731] overflow-hidden transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-blue-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10 text-white">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Logos */}
            <div className="col-span-12 md:col-span-6 flex justify-center md:justify-end space-x-6 space-y-6 md:space-y-0">
              {[
                "/assets/footerImages/comp.png",
                "/assets/footerImages/comp2.png",
                "/assets/footerImages/comp3.png",
                "/assets/footerImages/comp4.png",
              ].map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-16 w-16 md:h-24 md:w-24 max-w-full object-contain"
                  width={64} // 16 * 4 (tailwind 16 scale = 64px)
                  height={64} // 16 * 4 (tailwind 16 scale = 64px)
                />
              ))}
            </div>
          </div>
        </div>

        {/*Copyright section*/}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-2xl text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 by{" "}
            <a
              href="https://vendor.avasoftsolution.com/dekoshurcrafts.com"
              className="hover:underline hover:text-amber-950 text-2xl"
            >
              dekoshurcrafts.com
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
