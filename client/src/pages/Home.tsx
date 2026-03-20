/**
 * Home Page - Lost Future Website
 * 
 * Design Philosophy: Minimalist black and white with serious typography
 * - Hero section with title
 * - Biography section with alternating image/text layout
 * - Support for background images
 * - Sharp corners, no borders or effects
 */

export default function Home() {
  // Biography data - easy to add new entries
  const biographies = [
    {
      id: 1,
      name: "Биография 1",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
    },
    {
      id: 2,
      name: "Биография 2",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
    },
    {
      id: 3,
      name: "Биография 3",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
    },
    {
      id: 4,
      name: "Биография 4",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
    },
  ];

  // Optional: Set background image for the entire page
  const backgroundImageUrl = ""; // Вставьте URL фонового изображения

  return (
    <div 
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Optional: Dark overlay for background image */}
      {backgroundImageUrl && (
        <div className="fixed inset-0 bg-black/80 pointer-events-none"></div>
      )}

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="hero-section min-h-screen flex items-center justify-center">
          <div className="container px-4 md:px-8">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Потерянное будущее
              </h1>
              <p className="text-lg md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Добавьте описание вашего проекта здесь
              </p>
            </div>
          </div>
        </section>

        {/* Biographies Section */}
        <section className="biographies-section bg-background py-24">
          <div className="container px-4 md:px-8">
            {/* Section Header */}
            <div className="mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Биографии
              </h2>
              <div className="w-16 h-1 bg-foreground"></div>
            </div>

            {/* Biography Items - Alternating Layout */}
            <div className="space-y-20">
              {biographies.map((bio, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={bio.id}
                    className={`biography-item-${bio.id} grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}
                  >
                    {/* Image Container - Strictly Square */}
                    <div className={`image-container ${isEven ? "md:order-1" : "md:order-2"}`}>
                      <div className="aspect-square bg-foreground overflow-hidden">
                        {bio.imageUrl ? (
                          <img
                            src={bio.imageUrl}
                            alt={bio.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted">
                            <span className="text-muted-foreground text-center px-4">
                              Изображение здесь
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Text Container */}
                    <div className={`text-container ${isEven ? "md:order-2" : "md:order-1"}`}>
                      <h3 
                        className="text-3xl md:text-4xl font-bold mb-4" 
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {bio.name}
                      </h3>
                      <p 
                        className="text-lg md:text-xl text-foreground leading-relaxed" 
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {bio.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
