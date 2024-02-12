/**
 * v0 by Vercel.
 * @see https://v0.dev/t/71Ob8EEp1l8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Forgot() {
  return (
    <div className="px-2">
      <div className="max-w-sm mx-auto space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Forgot your password?</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email to reset your password</p>
        </div>
        <div className="space-y-2">
          <Input id="email" placeholder="Email" required type="email" />
          <Button className="w-full">Send Reset Link</Button>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We'll send you an email with a link to reset your password.
          </p>
        </div>
      </div>
    </div>
  )
}

