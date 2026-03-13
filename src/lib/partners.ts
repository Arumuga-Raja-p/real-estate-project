import {client} from "./sanity.client"

export type Partner = {
  _key?: string
  name: string
  logoUrl: string
  website?: string
}

export type PartnersSectionData = {
  title: string
  subtitle: string
  partners: Partner[]
}

export async function fetchPartnersSection(): Promise<PartnersSectionData | null> {
  const query = `*[_type == "partnersSection"][0]{
    title,
    subtitle,
    "partners": partners[]{
      _key,
      name,
      website,
      "logoUrl": logo.asset->url
    }
  }`

  const data = await client.fetch<Partial<PartnersSectionData> | null>(query)

  if (!data?.partners?.length) {
    return null
  }

  const partners = data.partners.filter((partner): partner is Partner => {
    return Boolean(partner?.name && partner?.logoUrl)
  })

  if (!partners.length) {
    return null
  }

  return {
    title: data.title || "",
    subtitle: data.subtitle || "",
    partners,
  }
}
