/**
 * Home Page - Lost Future Website
 * 
 * Design Philosophy: Melancholic dark blue atmosphere with engaging biography section
 * - Hero section with title
 * - Dynamic biography section with cards and hover effects
 * - Square images with modern styling
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-card to-background">
        <div className="container px-4 md:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Потерянное будущее
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
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
            <div className="w-16 h-1 bg-accent rounded-full"></div>
          </div>

          {/* Biography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            {biographies.map((bio, index) => (
              <div
                key={bio.id}
                className={`biography-card-${bio.id} group`}
              >
                {/* Card Container */}
                <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 transform hover:-translate-y-2">
                  {/* Image Container - Strictly Square */}
                  <div className="aspect-square bg-muted overflow-hidden relative">
                    {bio.imageUrl ? (
                      <img
                        src={bio.imageUrl}
                        alt={bio.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-secondary">
                        <span className="text-muted-foreground text-center px-4">
                          Изображение здесь
                        </span>
                      </div>
                    )}
                    
                    {/* Overlay accent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Text Container */}
                  <div className="p-6 md:p-8">
                    <h3 
                      className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-300" 
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {bio.name}
                    </h3>
                    <p 
                      className="text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300" 
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {bio.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
