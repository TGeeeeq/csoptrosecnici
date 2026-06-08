"use client"

import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useLanguage } from "@/components/language-provider"
import { buildContactSchema, type ContactInput } from "@/lib/contact-schema"

export function ContactForm() {
  const { t } = useLanguage()
  const [submitting, setSubmitting] = useState(false)
  const schema = useMemo(() => buildContactSchema(t), [t])

  const form = useForm<ContactInput>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "", website: "" },
  })

  async function onSubmit(values: ContactInput) {
    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; degraded?: boolean }

      if (res.ok && data.ok) {
        toast.success(t("Zpráva byla odeslána. Děkujeme!", "Your message has been sent. Thank you!"))
        form.reset()
      } else if (res.status === 503 || data.degraded) {
        toast.message(t("Formulář zatím není napojen na e-mail.", "The form is not connected to email yet."), {
          description: t(
            "Napište nám prosím přímo na csoptrosecnici@seznam.cz.",
            "Please write to us directly at csoptrosecnici@seznam.cz.",
          ),
        })
      } else {
        toast.error(t("Zprávu se nepodařilo odeslat. Zkuste to prosím znovu.", "Could not send the message. Please try again."))
      }
    } catch {
      toast.error(t("Došlo k chybě sítě. Zkuste to prosím znovu.", "A network error occurred. Please try again."))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-5">
        {/* Honeypot – skryté pole proti spamu */}
        <div className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
          <label>
            {t("Toto pole nevyplňujte", "Do not fill this field")}
            <input type="text" tabIndex={-1} autoComplete="off" {...form.register("website")} />
          </label>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Jméno", "Name")}</FormLabel>
              <FormControl>
                <Input placeholder={t("Vaše jméno", "Your name")} autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("E-mail", "Email")}</FormLabel>
              <FormControl>
                <Input type="email" placeholder="vas@email.cz" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Zpráva", "Message")}</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder={t("Napište nám…", "Write to us…")}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" disabled={submitting} className="btn-shine w-full shadow-md shadow-primary/20 sm:w-auto">
          {submitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
          {t("Odeslat zprávu", "Send message")}
        </Button>
      </form>
    </Form>
  )
}
