import { clinic } from '@/lib/site-data'

/**
 * MedicalClinic / LocalBusiness JSON-LD structured data for SEO.
 * Placeholder NAP (name, address, phone).
 */
export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: clinic.name,
    description:
      'Advanced non surgical orthopedic care and rapid performance recovery for athletes and active adults.',
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.address.line1,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.zip,
      addressCountry: 'US',
    },
    medicalSpecialty: ['SportsMedicine', 'PhysicalTherapy'],
    openingHours: ['Mo-Th 07:00-19:00', 'Fr 07:00-17:00', 'Sa 08:00-13:00'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
