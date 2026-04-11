"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

/** SOS contact email — used as the Zelle recipient address. */
const SOS_ZELLE_EMAIL = "Stridesoversidelines@gmail.com"

export function ZelleDonationCard() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    void navigator.clipboard.writeText(SOS_ZELLE_EMAIL)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#6D1ED4]/10 p-2.5 ring-1 ring-[#6D1ED4]/15">
          <Image
            src="/images/zelle-logo.svg"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9"
          />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground leading-tight">
          Donate with Zelle
        </h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        Send a gift from your bank&apos;s Zelle feature using our organization email as the recipient. Most U.S. banks include Zelle in their mobile app.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="font-mono text-sm font-medium text-foreground break-all">
          {SOS_ZELLE_EMAIL}
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0"
          onClick={copyEmail}
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy email
            </>
          )}
        </Button>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Note: Include your name and &ldquo;Donation&rdquo; in the memo so we can thank you accurately.
      </p>
    </div>
  )
}
