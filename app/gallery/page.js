export default function GalleryPage() {
  const galleryImages = [
    { src: "/gallery-1.png", alt: "Students in classroom learning" },
    { src: "/gallery-2.png", alt: "Science laboratory activities" },
    { src: "/gallery-3.png", alt: "Sports day activities" },
    { src: "/gallery-4.png", alt: "Art and craft session" },
    { src: "/gallery-5.png", alt: "School assembly" },
    { src: "/gallery-6.png", alt: "Library reading time" },
    { src: "/gallery-7.png", alt: "Music and drama performance" },
    { src: "/gallery-8.png", alt: "Computer lab session" },
    { src: "/gallery-9.png", alt: "Playground activities" },
  ]

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">School Gallery</h1>
        <p className="page-description">
          Take a glimpse into life at Mirema School through our photo gallery. See our students engaged in learning,
          playing, and growing in our nurturing environment.
        </p>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src || "/placeholder.svg"} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
