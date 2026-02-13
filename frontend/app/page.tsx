import ImageUploader from "@/components/ImageUploader"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">
          Style Transfer
        </h1>
        <h3>
          <i>
            Upload image and select style (or upload style image) 
            to get a version of the original image 
            with the custom style applied.
          </i>
        </h3>
        <br></br>
        <ImageUploader />
      </div>
    </main>
  )
}
