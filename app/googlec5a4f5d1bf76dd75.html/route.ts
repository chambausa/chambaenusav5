export function GET() {
  return new Response(
    'google-site-verification: googlec5a4f5d1bf76dd75.html',
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
      },
    }
  )
}
