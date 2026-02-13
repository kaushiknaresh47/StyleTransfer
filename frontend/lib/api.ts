export async function uploadImage(
  file: File,
  style: string
) {
  const formData = new FormData()
  formData.append("image", file)
  formData.append("style", style)

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/transfer`,
    {
      method: "POST",
      body: formData,
    }
  )

  if (!response.ok) {
    throw new Error("Upload failed")
  }

  return response.json()
}
