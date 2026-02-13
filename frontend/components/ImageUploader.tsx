"use client"

import { useState } from "react"
import { uploadImage } from "@/lib/api"

export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [style, setStyle] = useState("monet")
  const [loading, setLoading] = useState(false)
  const [resultUrl, setResultUrl] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!file) return

    setLoading(true)
    try {
      const data = await uploadImage(file, style)
      setResultUrl(data.output_url)
    } catch (err) {
      console.error(err)
      alert("Something went wrong")
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="monet">Monet</option>
        <option value="vangogh">Van Gogh</option>
        <option value="picasso">Picasso</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white p-2 rounded"
      >
        {loading ? "Processing..." : "Apply Style to Image"}
      </button>

      {resultUrl && (
        <img
          src={resultUrl}
          alt="Result"
          className="mt-4 rounded shadow"
        />
      )}
    </div>
  )
}
