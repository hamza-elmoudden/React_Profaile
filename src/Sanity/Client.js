import { createClient } from "@sanity/client";
import urlBuilder from "@sanity/image-url";
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
        projectId:"eleqv5de",
        dataset: "production",
        useCdn: true,
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

const buil = urlBuilder(client)


export async function urlbuild(url){
   
  const file =  buil.forceDownload(url)
  const file_url = file.options.download.split("-")[1]
  return  `https://cdn.sanity.io/file/${file.options.projectId}/${file.options.dataset}/${file_url}.pdf`

}

