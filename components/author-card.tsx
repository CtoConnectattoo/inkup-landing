import Image from "next/image"

type AuthorLink = {
  label: string
  url: string
}

type AuthorCardProps = {
  name: string
  image?: string
  role?: string
  bio?: string
  experience?: string
  links?: AuthorLink[]
}

const getInitials = (fullName: string) => {
  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")

  return initials || "IN"
}

export function AuthorCard({ name, image, role, bio, experience, links = [] }: AuthorCardProps) {
  if (!name) {
    return null
  }

  return (
    <section className="mt-12 bg-purple-50 border border-purple-100 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-semibold">
          {image ? (
            <Image src={image} alt={`Foto de ${name}`} fill className="object-cover" sizes="48px" />
          ) : (
            <span>{getInitials(name)}</span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">{name}</h3>
          {role && <p className="text-sm text-purple-700 font-medium">{role}</p>}
        </div>
      </div>
      {bio && <p className="text-gray-700 mb-3">{bio}</p>}
      {experience && <p className="text-gray-700 mb-3">{experience}</p>}
      {links.length > 0 && (
        <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-purple-700">
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
