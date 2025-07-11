import { GalleryVerticalEnd } from "lucide-react"

import { SolicitudForm } from "@/components/solicitud-form"

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <img className="w-[65%] mx-auto" src="/logo-1.png" alt="" />
        <SolicitudForm />
      </div>
    </div>
  )
}
