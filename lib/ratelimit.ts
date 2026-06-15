// Rate limiting simple en mémoire (pour production, utiliser Redis/Upstash)
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Nettoyer les entrées expirées toutes les 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

export async function rateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60000 // 1 minute par défaut
): Promise<{ success: boolean; remaining: number; reset: number }> {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  if (!entry || entry.resetTime < now) {
    // Nouvelle fenêtre
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      success: true,
      remaining: maxRequests - 1,
      reset: now + windowMs,
    };
  }

  if (entry.count >= maxRequests) {
    return {
      success: false,
      remaining: 0,
      reset: entry.resetTime,
    };
  }

  // Incrémenter le compteur
  entry.count++;
  rateLimitStore.set(identifier, entry);

  return {
    success: true,
    remaining: maxRequests - entry.count,
    reset: entry.resetTime,
  };
}
