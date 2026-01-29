import { NextResponse } from "next/server"

const ROBOTS_CONTENT = `User-agent: *
Allow: /
Sitemap: https://inkup.io/sitemap.xml
`

export async function GET() {
  return new NextResponse(ROBOTS_CONTENT, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
