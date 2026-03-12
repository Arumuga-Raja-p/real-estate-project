import {client} from "./sanity.client"

export async function fetchReviews() {
    const query = `*[_type == "testimonal"]{
        _id,
        name,
        description,
        rating,
        "imageUrl": image.asset->url
    }`
    const reviews = await client.fetch(query)
    return reviews
}

