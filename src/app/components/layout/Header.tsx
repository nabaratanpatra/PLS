'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import menuData from '../data/dropdown-menu'

interface SubItem {
  name: string
  subItems: string[]
}

interface MenuData {
  Services: SubItem[]
  Industries: SubItem[]
  Technologies: SubItem[]
  Product: string[]
  Portfolio: string[]
}

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null)

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top utility bar */}
        <div className="flex justify-end gap-4 py-2 text-xs">
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            PRICING
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            CONTACT
          </Link>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/footerImages/comp.png"
              alt="Company Logo"
              width={180}
              height={50}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {Object.keys(menuData).map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(menu)}
                onMouseLeave={() => {
                  setHoveredMenu(null)
                  setHoveredSubMenu(null)
                }}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 py-2">
                  {menu.toUpperCase()}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {hoveredMenu === menu && (
                  <div
                    className="fixed left-1/2 top-[4.5rem] -translate-x-1/2 bg-white shadow-lg p-8 z-50 grid grid-cols-[300px,1fr,1fr,1fr] gap-8"
                    style={{
                      width: 'min(1200px, calc(100vw - 48px))',
                    }}
                  >
                    {/* Image Column */}
                    <div className="flex flex-col items-start">
                      <Image
                        src="/assets/menuImages/default-image.jpg"
                        alt={`${menu} Image`}
                        width={250}
                        height={150}
                        className="rounded shadow-md"
                      />
                      <p className="text-sm text-gray-500 mt-4">
                        Explore more about {menu.toLowerCase()} and discover our offerings.
                      </p>
                    </div>

                    {/* Content Columns */}
                    {Array.isArray(menuData[menu as keyof MenuData]) && (
                      <>
                        <div>
                          {(menuData[menu as keyof MenuData] as (string | SubItem)[])
                            .slice(0, Math.ceil((menuData[menu as keyof MenuData] as (string | SubItem)[]).length / 3))
                            .map((item) => renderMenuItem(item, menu))}
                        </div>
                        <div>
                          {(menuData[menu as keyof MenuData] as (string | SubItem)[])
                            .slice(
                              Math.ceil((menuData[menu as keyof MenuData] as (string | SubItem)[]).length / 3),
                              Math.ceil((menuData[menu as keyof MenuData] as (string | SubItem)[]).length * 2 / 3)
                            )
                            .map((item) => renderMenuItem(item, menu))}
                        </div>
                        <div>
                          {(menuData[menu as keyof MenuData] as (string | SubItem)[])
                            .slice(Math.ceil((menuData[menu as keyof MenuData] as (string | SubItem)[]).length * 2 / 3))
                            .map((item) => renderMenuItem(item, menu))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/get-started"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors text-sm font-medium"
            >
              GET STARTED
            </Link>
            <Link
              href="/quote"
              className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-2 rounded transition-colors text-sm font-medium"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </header>
  )

  function renderMenuItem(item: string | SubItem, menu: string) {
    if (typeof item === 'string') {
      // For simple items (like services), link to a service page with serviceName
      return (
        <Link
          key={item}
          href={`/${menu.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
          className="block text-gray-600 hover:text-green-600 py-1"
        >
          {item}
        </Link>
      );
    } else {
      // For submenu items, link to a service page with serviceName and subItem
      return (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() => setHoveredSubMenu(item.name)}
          onMouseLeave={() => setHoveredSubMenu(null)}
        >
          <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 py-1">
            {item.name}
            <ChevronRight className="h-4 w-4" />
          </button>
  
          {hoveredSubMenu === item.name && (
            <div className="absolute top-0 left-full w-[400px] bg-white shadow-lg p-4 z-10">
              <ul className="space-y-2 text-sm">
                {item.subItems.map((subItem) => (
                  <li key={subItem}>
                    <Link
                      href={`/${menu.toLowerCase()}/${item.name.toLowerCase().replace(/\s+/g, '-')}/${subItem
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }
  }
  

}

