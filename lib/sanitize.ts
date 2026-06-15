// Sanitization HTML simple (pour production, utiliser DOMPurify)
export function sanitizeHtml(html: string): string {
  // Échapper les caractères HTML dangereux
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export function sanitizeText(text: string): string {
  // Nettoyer le texte pour les emails (supprimer HTML, garder seulement les sauts de ligne)
  return text
    .replace(/<[^>]*>/g, '') // Supprimer les balises HTML
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}
