import { z } from "zod"

export type Translate = (cs: string, en: string) => string

/**
 * Schéma kontaktního formuláře. Sdílené klientem (lokalizované hlášky přes `t`)
 * i serverem (route handler). Pole `website` je honeypot – na klientovi skryté,
 * na serveru se neprázdná hodnota vyhodnotí jako spam.
 */
export function buildContactSchema(t: Translate) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(2, t("Zadejte prosím své jméno.", "Please enter your name."))
      .max(100, t("Jméno je příliš dlouhé.", "Name is too long.")),
    email: z
      .string()
      .trim()
      .max(200, t("E-mail je příliš dlouhý.", "Email is too long."))
      .email(t("Zadejte platnou e-mailovou adresu.", "Please enter a valid email address.")),
    message: z
      .string()
      .trim()
      .min(10, t("Zpráva je příliš krátká (min. 10 znaků).", "Message is too short (min. 10 characters)."))
      .max(5000, t("Zpráva je příliš dlouhá.", "Message is too long.")),
    // honeypot – kontroluje se na serveru
    website: z.string().optional(),
  })
}

export const contactServerSchema = buildContactSchema((cs) => cs)
export type ContactInput = z.infer<ReturnType<typeof buildContactSchema>>
