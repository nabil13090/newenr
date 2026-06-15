// NOTE: Middleware désactivé pour static export
// Les headers de sécurité sont gérés par .htaccess sur Hostinger
// Ce fichier est conservé pour référence mais ne sera pas utilisé en production

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // En mode static export, le middleware Next.js ne fonctionne pas
  // Les headers sont gérés par .htaccess
  return NextResponse.next()
}

export const config = {
  matcher: [],
}
