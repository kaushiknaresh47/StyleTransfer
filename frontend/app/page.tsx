import ImageUploader from "@/components/ImageUploader"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">
          AI Style Transfer
        </h1>
        <ImageUploader />
      </div>
    </main>
  )
}
