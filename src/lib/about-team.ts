import {client} from "./sanity.client"

export type TeamMember = {
  _key?: string
  name: string
  role: string
  image: string
  bio?: string
  email?: string
  phone?: string
  instagram?: string
  x?: string
  facebook?: string
  linkedin?: string
}

export type AboutTeamSectionData = {
  badge: string
  title: string
  description: string
  memberBadge: string
  viewProfileLabel: string
  connectLabel: string
  ctaLabel: string
  members: TeamMember[]
}

export async function fetchAboutTeamSection(): Promise<AboutTeamSectionData | null> {
  const query = `*[_type == "aboutTeamSection"][0]{
    badge,
    title,
    description,
    memberBadge,
    viewProfileLabel,
    connectLabel,
    ctaLabel,
    "members": members[]{
      _key,
      name,
      role,
      bio,
      email,
      phone,
      instagram,
      x,
      facebook,
      linkedin,
      "image": image.asset->url
    }
  }`

  const data = await client.fetch<Partial<AboutTeamSectionData> | null>(query)

  if (!data?.members?.length) {
    return null
  }

  const members = data.members.filter((member): member is TeamMember => {
    return Boolean(member?.name && member?.role && member?.image)
  })

  if (!members.length) {
    return null
  }

  return {
    badge: data.badge || "",
    title: data.title || "",
    description: data.description || "",
    memberBadge: data.memberBadge || "Expert",
    viewProfileLabel: data.viewProfileLabel || "View Profile",
    connectLabel: data.connectLabel || "Connect with me",
    ctaLabel: data.ctaLabel || "Schedule a Consultation",
    members,
  }
}
