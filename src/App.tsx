import { lazy, Suspense } from 'react';
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  Palette, 
  Map, 
  Book, 
  Heart,
  Award,
  Coffee,
  Plane,
  Leaf,
  Languages,
  Feather
} from 'lucide-react';

const portfolioItems = [
  {
    title: "Green Space Integration",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000",
    category: "Urban Design"
  },
  {
    title: "Aster App UX Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    category: "UX/UI Design"
  },
  {
    title: "Traditional Public Spaces",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    category: "Urban Design"
  },
  {
    title: "Sorreil Energy Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    category: "Brand Design"
  },
  {
    title: "Garden Residence",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000",
    category: "Interior Design"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <header className="fixed w-full bg-beige/90 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-light text-dark">Sîli Elena</h1>
            <div className="space-x-6">
              {['About', 'Portfolio', 'Awards', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="nav-link capitalize text-dark hover:text-primary"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section id="about" className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-5xl font-light mb-6">Designer & Urban Planner</h2>
              <p className="text-lg text-gray-600 mb-8">
                Crafting meaningful spaces and experiences that bridge nature with urban living. 
                Based in Chisinau, Moldova, specializing in sustainable urban design and creative solutions.
              </p>
              <div className="flex gap-4">
                <Map className="text-primary" />
                <Palette className="text-secondary" />
                <Leaf className="text-tertiary" />
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg" />
              <div className="relative p-8">
                <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#D4AF37" d="M45.5,-51.6C57.9,-39.8,66.2,-24.1,68.1,-7.5C70,9.1,65.5,26.5,55.3,39.6C45.1,52.7,29.2,61.5,11.7,64.4C-5.8,67.3,-24.9,64.3,-39.8,54.8C-54.7,45.3,-65.4,29.2,-69.1,11.2C-72.8,-6.8,-69.5,-26.8,-58.7,-40.4C-47.9,-54,-29.6,-61.2,-11.9,-61.1C5.8,-61,33.1,-63.5,45.5,-51.6Z" transform="translate(100 100)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Leaf className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Translation & Literature Section */}
        <section className="container mx-auto px-6 py-16 bg-white/30">
          <h3 className="section-title">Literary & Translation Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Languages className="text-primary mb-4 w-8 h-8" />
              <h4 className="text-xl font-medium mb-3">Translation Projects</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Romanian-English Technical Documentation</li>
                <li>• Urban Planning Guidelines Translation</li>
                <li>• Architectural Terms Standardization</li>
                <li>• Cultural Heritage Documentation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Feather className="text-secondary mb-4 w-8 h-8" />
              <h4 className="text-xl font-medium mb-3">Literary Contributions</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Published Essays on Urban Development</li>
                <li>• Contributing Writer - Architecture Monthly</li>
                <li>• Urban Poetry Collection "City Whispers"</li>
                <li>• Research Papers on Sustainable Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="portfolio" className="container mx-auto px-6 py-16">
          <h3 className="section-title">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="hover-card rounded-lg overflow-hidden bg-white">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <span className="text-primary text-sm">{item.category}</span>
                  <h4 className="text-xl mt-2">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="container mx-auto px-6 py-16 bg-white/50">
          <h3 className="section-title">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 hover-card bg-white rounded-lg">
              <Award className="text-primary flex-shrink-0" />
              <div>
                <h4 className="font-medium">National Translation Award</h4>
                <p className="text-gray-600">2023 - Technical Literature</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 hover-card bg-white rounded-lg">
              <Award className="text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-medium">Urban Design Excellence</h4>
                <p className="text-gray-600">2022 - Sustainable Planning</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 hover-card bg-white rounded-lg">
              <Award className="text-tertiary flex-shrink-0" />
              <div>
                <h4 className="font-medium">Literary Achievement</h4>
                <p className="text-gray-600">2021 - Urban Poetry</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="container mx-auto px-6 py-16">
          <h3 className="section-title">Beyond Design</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Plane, text: "Exploring Places" },
              { icon: Coffee, text: "Creating Recipes" },
              { icon: Book, text: "Literature" },
              { icon: Heart, text: "Community Work" }
            ].map((hobby, index) => (
              <div key={index} className="text-center hover-card p-6 bg-white rounded-lg">
                <hobby.icon className="mx-auto mb-4 text-primary" />
                <p>{hobby.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-6 py-16">
          <h3 className="section-title">Get in Touch</h3>
          <div className="flex justify-center gap-8">
            {[
              { icon: Mail, link: "#", label: "Email" },
              { icon: Linkedin, link: "#", label: "LinkedIn" },
              { icon: Instagram, link: "#", label: "Instagram" },
              { icon: Palette, link: "#", label: "Behance" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="flex flex-col items-center gap-2 text-dark hover:text-primary transition-colors"
              >
                <social.icon className="w-6 h-6" />
                <span className="text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2024 Sîli Elena. Made with <Heart className="inline-block w-4 h-4 text-secondary" /> by Han</p>
        </div>
      </footer>
    </div>
  );
}

export default App;