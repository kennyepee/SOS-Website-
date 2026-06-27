"use client"

import React, { useState, useCallback } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { Heart, Loader2, CheckCircle, AlertCircle } from "lucide-react"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

const PRESET_AMOUNTS = [25, 50, 100, 250, 500]

type Frequency = "one-time" | "monthly"

function CheckoutForm({
  amount,
  frequency,
  onSuccess,
}: {
  amount: number
  frequency: Frequency
  onSuccess: () => void
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setSubmitting(true)
    setError(null)

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/donate?success=true`,
      },
      redirect: "if_required",
    })

    if (confirmError) {
      setError(confirmError.message || "Payment failed. Please try again.")
      setSubmitting(false)
    } else {
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      {error && (
        <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={!stripe || submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Heart className="mr-2 h-4 w-4" />
            Donate ${amount}
            {frequency === "monthly" ? "/mo" : ""}
          </>
        )}
      </Button>
    </form>
  )
}

export function DonationForm() {
  const [amount, setAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState("")
  const [isCustom, setIsCustom] = useState(false)
  const [frequency, setFrequency] = useState<Frequency>("one-time")
  const [email, setEmail] = useState("")
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const effectiveAmount = isCustom ? parseFloat(customAmount) : amount

  const handlePresetClick = (preset: number) => {
    setAmount(preset)
    setIsCustom(false)
    setCustomAmount("")
  }

  const handleCustomFocus = () => {
    setIsCustom(true)
    setAmount(null)
  }

  const handleContinue = useCallback(async () => {
    if (!effectiveAmount || effectiveAmount < 1) {
      setError("Please enter a valid donation amount.")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: effectiveAmount,
          frequency,
          email: email || undefined,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to initialize payment.")
      }

      setClientSecret(data.clientSecret)
    } catch (err: any) {
      setError(err.message || "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }, [effectiveAmount, frequency, email])

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-foreground">
          Thank You for Your Donation!
        </h3>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Your generous {frequency === "monthly" ? "monthly " : ""}contribution
          of ${effectiveAmount} helps us deliver soccer training, mentorship,
          and mental performance education to underserved youth.
        </p>
        <Button
          className="mt-8"
          variant="outline"
          onClick={() => {
            setSuccess(false)
            setClientSecret(null)
            setAmount(50)
            setIsCustom(false)
            setCustomAmount("")
            setFrequency("one-time")
            setEmail("")
          }}
        >
          Make Another Donation
        </Button>
      </div>
    )
  }

  if (clientSecret) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 rounded-xl bg-muted border border-border">
          <div>
            <p className="text-sm text-muted-foreground">Donating</p>
            <p className="text-xl font-bold text-foreground">
              ${effectiveAmount}
              {frequency === "monthly" ? (
                <span className="text-sm font-normal text-muted-foreground">
                  /month
                </span>
              ) : (
                <span className="text-sm font-normal text-muted-foreground">
                  {" "}one-time
                </span>
              )}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setClientSecret(null)}
          >
            Change
          </Button>
        </div>

        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
              variables: {
                borderRadius: "8px",
              },
            },
          }}
        >
          <CheckoutForm
            amount={effectiveAmount!}
            frequency={frequency}
            onSuccess={() => setSuccess(true)}
          />
        </Elements>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Frequency Toggle */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Donation Frequency
        </label>
        <div className="inline-flex rounded-lg border border-border p-1 bg-muted">
          <button
            type="button"
            onClick={() => setFrequency("one-time")}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              frequency === "one-time"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            One-Time
          </button>
          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              frequency === "monthly"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Amount Selection */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Select Amount
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {PRESET_AMOUNTS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => handlePresetClick(preset)}
              className={`py-3 px-4 rounded-xl border text-center font-semibold transition-colors ${
                !isCustom && amount === preset
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-foreground hover:border-primary/50"
              }`}
            >
              ${preset}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <div
            className={`flex items-center rounded-xl border px-4 py-3 transition-colors ${
              isCustom
                ? "border-primary bg-primary/10"
                : "border-border bg-card"
            }`}
          >
            <span className="text-foreground font-semibold mr-1">$</span>
            <input
              type="number"
              min="1"
              step="any"
              placeholder="Custom amount"
              value={customAmount}
              onFocus={handleCustomFocus}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setIsCustom(true)
                setAmount(null)
              }}
              className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-3">
          Email {frequency === "monthly" ? "(required)" : "(optional, for receipt)"}
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Continue */}
      <Button
        size="lg"
        className="w-full"
        onClick={handleContinue}
        disabled={loading || (!effectiveAmount || effectiveAmount < 1)}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Setting up...
          </>
        ) : (
          <>
            Continue to Payment
          </>
        )}
      </Button>
    </div>
  )
}
