import React, { useState, useEffect } from 'react';
import { PawPrint, Bone, Scissors, Sparkles, Mail, Phone, MapPin, Twitter, Instagram, Facebook, Hand, Star, X, ArrowRight, ArrowLeft } from 'lucide-react';

// --- Helper Data (Easy to customize) ---
const portfolioData = {
    businessName: "Mac Cuts Mutts",
    tagline: "Pawsitively chic cuts for your furry friends.",
    bookingLink: "#", // TODO: Add a real booking link (e.g., from Calendly)
    contact: {
        email: "contact@maccutsmutts.com", // TODO: Update contact email
        phone: "(555) 789-1011", // TODO: Update contact phone
        address: "Mobile grooming serving the Portland, OR area. Services available in-van, at your home, or via drop-off.",
        // TODO: Update location/service area
    },
    socials: {
        twitter: "#",
        instagram: "#",
        facebook: "#",
        // TODO: Add social media links
    },
    services: [
        {
            icon: Bone,
            title: "Bath & Brush",
            description: "A refreshing bath with premium shampoos, followed by a thorough brushing to leave the coat soft and shiny."
        },
        {
            icon: Scissors,
            title: "Full Groom",
            description: "Includes a bath, brush, haircut to your preference, nail trim, and ear cleaning for a complete makeover."
        },
        {
            icon: PawPrint,
            title: "Puppy's First Cut",
            description: "A gentle introduction to grooming for your new best friend, making it a positive and fun experience."
        },
        {
            icon: Sparkles,
            title: "De-Shedding",
            description: "A special treatment to significantly reduce shedding, keeping your pup comfortable and your home cleaner."
        },
        {
            icon: Hand,
            title: "Nail Trimming",
            description: "A quick and careful nail trim to keep your dog's paws healthy and prevent discomfort."
        }
    ],
    pricing: [
        { service: "Bath & Brush", price: "$45+", note: "Based on breed & coat condition" },
        { service: "Full Groom", price: "$75+", note: "Based on breed, size & cut" },
        { service: "Puppy's First Cut", price: "$60", note: "Up to 6 months old" },
        { service: "De-Shedding Treatment", price: "+$20", note: "Added to any bath/groom" },
        { service: "Nail Trimming", price: "$15", note: "Walk-in service available" }
        // TODO: Update pricing
    ],
    about: {
        name: "Mackenzie Proffitt",
        title: "Lead Groomer & Dog Lover",
        bio: "From a young age, I've had a deep love and connection with dogs. This passion led me to professional grooming, where I've spent the last 8 years perfecting my craft. I believe that grooming is more than just a haircut; it's about a dog's health, comfort, and happiness. I treat every dog that comes through my door as if they were my own, with patience, kindness, and a gentle touch. My mission is to provide a safe, stress-free environment for your furry family member.",
        // TODO: Replace with Mackenzie's real bio
        imageUrl: "https://placehold.co/600x800/ede9fe/333333?text=Mackenzie"
        // TODO: Replace with a real image URL
    },
    gallery: [
        { id: 1, before: "https://placehold.co/600x400/fff0f1/333333?text=Buddy+Before", after: "https://placehold.co/600x400/ede9fe/333333?text=Buddy+After", dogName: "Buddy" },
        { id: 2, before: "https://placehold.co/600x400/fff0f1/333333?text=Lucy+Before", after: "https://placehold.co/600x400/ede9fe/333333?text=Lucy+After", dogName: "Lucy" },
        { id: 3, before: "https://placehold.co/600x400/fff0f1/333333?text=Max+Before", after: "https://placehold.co/600x400/ede9fe/333333?text=Max+After", dogName: "Max" },
        { id: 4, before: "https://placehold.co/600x400/fff0f1/333333?text=Daisy+Before", after: "https://placehold.co/600x400/ede9fe/333333?text=Daisy+After", dogName: "Daisy" },
        // TODO: Add real before/after image URLs
    ],
    testimonials: [
        { quote: "Mackenzie is a true artist! Our scruffy terrier came back looking like a show dog. We couldn't be happier.", author: "Sarah L.", dog: "Winston" },
        { quote: "The best grooming experience we've ever had. She was so patient with our anxious poodle. Highly recommend Mac Cuts Mutts!", author: "Mike B.", dog: "Bella" },
        { quote: "I love the mobile service! So convenient, and Mackenzie does a fantastic job every single time.", author: "Jessica P.", dog: "Rocky" }
        // TODO: Add real testimonials
    ]
};


// --- Components ---

const Header = ({ activeTab, setActiveTab }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['Home', 'Pricing', 'About', 'Contact'];

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 w-full">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <PawPrint className="text-violet-500 h-8 w-8" />
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">{portfolioData.businessName}</h1>
                </div>

                <nav className="hidden md:flex space-x-8">
                    {navItems.map(item => (
                        <button
                            key={item}
                            onClick={() => setActiveTab(item.toLowerCase())}
                            className={`text-slate-600 hover:text-violet-500 transition-colors duration-300 relative text-lg font-medium ${activeTab === item.toLowerCase() ? 'text-violet-500' : ''}`}
                        >
                            {item}
                            {activeTab === item.toLowerCase() && (
                                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-violet-500 rounded-full"></span>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden bg-white pb-4">
                    {navItems.map(item => (
                        <button
                            key={item}
                            onClick={() => { setActiveTab(item.toLowerCase()); setIsMenuOpen(false); }}
                            className={`block w-full text-center py-2 text-slate-600 hover:bg-violet-50 transition-colors duration-300 ${activeTab === item.toLowerCase() ? 'font-bold text-violet-600' : ''}`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            )}
        </header>
    );
};

const HomePage = ({ onImageClick }) => (
    <div className="animate-fade-in">
        <section className="relative bg-violet-50 py-20 md:py-32">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/paws.png')"}}></div>
            <div className="container mx-auto px-6 text-center relative">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4 leading-tight">{portfolioData.businessName}</h2>
                <p className="text-xl md:text-2xl text-slate-600 mb-8">{portfolioData.tagline}</p>
                <a href={portfolioData.bookingLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-violet-500 text-white font-bold py-3 px-8 rounded-full hover:bg-violet-600 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                    Book a Grooming Session
                </a>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800">Our Services</h3>
                    <p className="text-lg text-slate-500 mt-2">Professional care for your beloved pet.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {portfolioData.services.map((service, index) => (
                        <div key={index} className="bg-violet-50/50 p-6 rounded-2xl shadow-sm text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                            <div className="inline-block p-4 bg-violet-500 text-white rounded-full mb-4">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h4>
                            <p className="text-slate-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-violet-50/70">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800">Happy Clients</h3>
                    <p className="text-lg text-slate-500 mt-2">See some of our amazing transformations!</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {portfolioData.gallery.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden group cursor-pointer" onClick={() => onImageClick(item)}>
                            <div className="grid grid-cols-2 gap-4 relative">
                                <img src={item.before} alt={`Before shot of ${item.dogName}`} className="rounded-lg aspect-square object-cover transition-transform duration-300 group-hover:scale-105" />
                                <img src={item.after} alt={`After shot of ${item.dogName}`} className="rounded-lg aspect-square object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white text-xl font-bold">View Makeover</p>
                                </div>
                            </div>
                            <p className="text-center mt-4 text-lg font-semibold text-slate-700">{item.dogName}'s Glow Up!</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800">Kind Words</h3>
                    <p className="text-lg text-slate-500 mt-2">What our customers are saying.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {portfolioData.testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-violet-50/50 p-8 rounded-2xl shadow-sm transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                            </div>
                            <p className="text-slate-600 mb-4 italic">"{testimonial.quote}"</p>
                            <p className="font-bold text-slate-800">{testimonial.author} <span className="font-normal text-slate-500">, parent of {testimonial.dog}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

const AboutPage = () => (
    <div className="animate-fade-in bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                    <img src={portfolioData.about.imageUrl} alt={portfolioData.about.name} className="rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover" />
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{`A Little About Me`}</h2>
                    <p className="text-xl font-medium text-violet-600 mb-6">{portfolioData.about.title}</p>
                    <div className="text-slate-600 text-lg space-y-4 leading-relaxed">
                        {portfolioData.about.bio.split('\n').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PricingPage = () => (
    <div className="animate-fade-in bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Our Pricing</h2>
                <p className="text-lg text-slate-500 mt-2">Simple, transparent pricing for top-quality care.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-violet-50/50 p-8 rounded-2xl shadow-lg">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                        <tr className="border-b-2 border-violet-200">
                            <th className="p-4 text-lg font-bold text-slate-800">Service</th>
                            <th className="p-4 text-lg font-bold text-slate-800">Starting Price</th>
                            <th className="p-4 text-lg font-bold text-slate-800">Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {portfolioData.pricing.map((item, index) => (
                            <tr key={index} className="border-b border-violet-100">
                                <td className="p-4 font-semibold text-slate-700">{item.service}</td>
                                <td className="p-4 font-bold text-violet-600">{item.price}</td>
                                <td className="p-4 text-slate-500">{item.note}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-center text-sm text-slate-500 mt-8">Prices may vary based on your dog's size, breed, and coat condition. Please contact us for a personalized quote!</p>
            </div>
        </div>
    </div>
);

const ContactPage = () => (
    <div className="animate-fade-in bg-violet-50/70 py-16 md:py-24">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Get In Touch</h2>
                <p className="text-lg text-slate-500 mt-2">Ready to pamper your pup? Reach out!</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-violet-200 pb-2">Contact Details</h3>
                        <div className="flex items-center space-x-4">
                            <Phone className="h-6 w-6 text-violet-500" />
                            <a href={`tel:${portfolioData.contact.phone}`} className="text-lg text-slate-600 hover:text-violet-600">{portfolioData.contact.phone}</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Mail className="h-6 w-6 text-violet-500" />
                            <a href={`mailto:${portfolioData.contact.email}`} className="text-lg text-slate-600 hover:text-violet-600">{portfolioData.contact.email}</a>
                        </div>
                        <div className="flex items-start space-x-4">
                            <MapPin className="h-6 w-6 text-violet-500 mt-1" />
                            <p className="text-lg text-slate-600">{portfolioData.contact.address}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-violet-200 pb-2 mb-6">Send a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Your Name</label>
                                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                <textarea id="message" rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-violet-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-violet-600 transition-colors duration-300 shadow-md">Send</button>
                            <p className="text-xs text-center text-slate-500 mt-2">Note: This form is for demonstration purposes.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-slate-800 text-white">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} {portfolioData.businessName}. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <a href={portfolioData.socials.twitter} className="hover:text-violet-400 transition-colors"><Twitter /></a>
                <a href={portfolioData.socials.instagram} className="hover:text-violet-400 transition-colors"><Instagram /></a>
                <a href={portfolioData.socials.facebook} className="hover:text-violet-400 transition-colors"><Facebook /></a>
            </div>
        </div>
    </footer>
);

const ImageLightbox = ({ galleryItem, onClose }) => {
    const [isAfter, setIsAfter] = useState(true);

    if (!galleryItem) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in" onClick={onClose}>
            <div className="bg-white rounded-2xl p-4 shadow-2xl relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute -top-4 -right-4 bg-violet-500 text-white rounded-full p-2 hover:bg-violet-600 transition-transform transform hover:scale-110">
                    <X className="h-6 w-6" />
                </button>
                <div className="relative">
                    <img src={isAfter ? galleryItem.after : galleryItem.before} alt={`${galleryItem.dogName} ${isAfter ? 'After' : 'Before'}`} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
                    <div className={`absolute top-2 left-2 px-3 py-1 rounded-full text-white font-bold text-sm ${isAfter ? 'bg-violet-500' : 'bg-pink-500'}`}>
                        {isAfter ? 'After' : 'Before'}
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-xl font-bold text-slate-800">{galleryItem.dogName}'s Transformation</p>
                    <div className="flex items-center space-x-2 bg-slate-100 rounded-full p-1">
                        <button onClick={() => setIsAfter(false)} className={`px-4 py-1 rounded-full text-sm font-semibold transition ${!isAfter ? 'bg-white text-slate-800 shadow' : 'text-slate-500'}`}>Before</button>
                        <button onClick={() => setIsAfter(true)} className={`px-4 py-1 rounded-full text-sm font-semibold transition ${isAfter ? 'bg-white text-slate-800 shadow' : 'text-slate-500'}`}>After</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---
export default function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [lightboxItem, setLightboxItem] = useState(null);

    useEffect(() => {
        const content = document.querySelector('.animate-fade-in');
        if(content) {
            content.classList.remove('animate-fade-in-active');
            void content.offsetWidth;
            content.classList.add('animate-fade-in-active');
        }
    }, [activeTab]);

    useEffect(() => {
        // Prevent scrolling when lightbox is open
        document.body.style.overflow = lightboxItem ? 'hidden' : 'auto';
    }, [lightboxItem]);

    const renderContent = () => {
        switch (activeTab) {
            case 'pricing':
                return <PricingPage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            case 'home':
            default:
                return <HomePage onImageClick={setLightboxItem} />;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <main>
                {renderContent()}
            </main>
            <Footer />
            <ImageLightbox galleryItem={lightboxItem} onClose={() => setLightboxItem(null)} />
        </div>
    );
}