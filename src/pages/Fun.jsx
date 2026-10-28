import { useEffect, useState } from "react";
import hiking from "../assets/photos/hiking.jpeg";
import kayak from "../assets/photos/kayak.jpeg";
import volunteer from "../assets/photos/volunteer.jpeg";
import dance from "../assets/photos/dance.jpeg";
import views from "../assets/photos/views.png";
import coffee from "../assets/photos/coffee.jpeg";
import conference from "../assets/photos/conference.jpeg";
import { useScrollReveal } from "../hooks/usePageEffects";

const INTERESTS = [
  { label: "Travel", icon: "fa-plane", accent: "sky" },
  { label: "Books", icon: "fa-book", accent: "amber" },
  { label: "Hikes & Nature", icon: "fa-person-hiking", accent: "teal" },
  { label: "Baking", icon: "fa-cookie", accent: "pink" },
  { label: "Dance", icon: "fa-music", accent: "lavender" },
  { label: "Sitcoms, Sci-Fi & Reality TV", icon: "fa-tv", accent: "sky" },
];

// The first photo is shown as the tall featured tile. `caption` is the full text shown in the lightbox.
const GALLERY = [
  { src: conference, title: "2026 Tapia Conference", place: "Atlanta, GA", caption: "Attending the 2026 Tapia Conference in Atlanta, GA", alt: "At a Conference" },
  { src: hiking, title: "Hiking", place: "Upstate NY", caption: "Hiking in Upstate NY", alt: "Khushi on a hike" },
  { src: kayak, title: "Kayaking", place: "Lake Tahoe", caption: "Enjoying the calmness of Lake Tahoe", alt: "Kayaking in Lake Tahoe" },
  { src: volunteer, title: "BAPS Charities Walkathon", place: "Canton, MI", caption: "Volunteering at a Walkathon with BAPS Charities in Canton, MI", alt: "Khushi volunteering" },
  { src: dance, title: "Dance Performance at Akshardham Temple", place: "Robbinsville, NJ", caption: "Performing a dance at the Akshardham Temple in Robbinsville, NJ", alt: "Dance performance at the Akshardham Temple" },
  { src: views, title: "Admiring the views", place: "Galway, Ireland", caption: "Admiring views in Galway, Ireland", alt: "Sitting by Water" },
  { src: coffee, title: "Cafe hopping", place: "Detroit, MI", caption: "Exploring cafes in Detroit, MI", alt: "Coffee" },
];

export default function Fun() {
  useScrollReveal();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") setSelected(null);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="container">
      <div className="page-header" data-animate>
        <span className="eyebrow">Beyond the Resume 💭</span>
        <h2>Things I Love To Do</h2>
      </div>

      <section className="section-block">
        <div className="section-heading" data-animate>
          <span className="section-kicker">Interests</span>
          <h3>What I'm Into</h3>
        </div>
        <div className="interests-grid">
          {INTERESTS.map((interest) => (
            <div key={interest.label} className={`interest-tile accent-${interest.accent}`} data-animate>
              <div className="item-icon"><i className={`fa-solid ${interest.icon}`}></i></div>
              <span>{interest.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading" data-animate>
          <span className="section-kicker">Snapshots 📸</span>
          <h3>Visual Snippets of My Life</h3>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <button
              key={item.caption}
              type="button"
              className="gallery-item"
              data-animate
              onClick={() => setSelected(item)}
            >
              <img src={item.src} alt={item.alt} />
              <span className="gallery-caption">
                <strong>{item.title}</strong>
                {item.place && <span><i className="fa-solid fa-location-dot"></i> {item.place}</span>}
              </span>
            </button>
          ))}
        </div>
      </section>
l
      <div
        className={"lightbox" + (selected ? " open" : "")}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
      >
        <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setSelected(null)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {selected && <img src={selected.src} alt={selected.alt} />}
        <p className="lightbox-caption">{selected ? selected.caption : ""}</p>
      </div>
    </div>
  );
}
