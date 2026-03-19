/**
 * Home Page - Lost Future Website
 * 
 * Design Philosophy: Simple dark-themed layout with clean typography
 * - Hero section with title
 * - Biography section with alternating image/text layout
 * - Easy to add new biographies by duplicating biography items
 */

export default function Home() {
  // Biography data - easy to add new entries
  const biographies = [
    {
      id: 1,
      name: "Биография 1",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
      imagePosition: "left", // left или right
    },
    {
      id: 2,
      name: "Биография 2",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
      imagePosition: "right", // left или right
    },
    {
      id: 3,
      name: "Биография 3",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
      imagePosition: "left", // left или right
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card">
        <div className="container px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Потерянное будущее
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
              Добавьте описание вашего проекта здесь
            </p>
          </div>
        </div>
      </section>

      {/* Biographies Section */}
      <section className="biographies-section bg-background">
        <div className="container px-4 md:px-8 py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "var(--font-display)" }}>
            Биографии
          </h2>
        </div>

        {/* Biography Items - no gaps between them */}
        <div className="space-y-0">
          {biographies.map((bio) => (
            <div
              key={bio.id}
              className={`biography-item-${bio.id} grid grid-cols-1 md:grid-cols-2 gap-0 min-h-96`}
            >
              {/* Image Container */}
              <div
                className={`image-container ${bio.imagePosition === "right" ? "md:order-2" : "md:order-1"}`}
              >
                <div className="w-full h-full bg-card overflow-hidden">
                  {bio.imageUrl ? (
                    <img
                      src={bio.imageUrl}
                      alt={bio.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground text-lg">Изображение здесь</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Container */}
              <div
                className={`text-container flex flex-col justify-center px-6 md:px-12 py-8 md:py-0 bg-card ${
                  bio.imagePosition === "right" ? "md:order-1" : "md:order-2"
                }`}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {bio.name}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {bio.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
