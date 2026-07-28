import { useEffect, useState } from "react";
import hiking from "../assets/photos/hiking.jpeg";
import kayak from "../assets/photos/kayak.jpeg";
import volunteer from "../assets/photos/volunteer.jpeg";
import nascar from "../assets/photos/nascar.jpeg";
import views from "../assets/photos/views.png";
import coffee from "../assets/photos/coffee.jpeg";
import { useScrollReveal } from "../hooks/usePageEffects";

const GALLERY = [
  { src: hiking, caption: "Hiking in Upstate NY", alt: "Khushi on a hike" },
  { src: kayak, caption: "Enjoying the calmness of Lake Tahoe", alt: "Kayaking in Lake Tahoe" },
  { src: volunteer, caption: "Volunteering at a Walkathon with BAPS Charities in Canton, MI", alt: "Khushi volunteering" },
  { src: nascar, caption: "At my first NASCAR Race", alt: "NASCAR Race" },
  { src: views, caption: "Admiring views in Galway, Ireland", alt: "Sitting by Water" },
  { src: coffee, caption: "Exploring cafes in Detroit, MI", alt: "Coffee" },
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
        <span className="eyebrow">What I Enjoy 💭</span>
        <h2>Things I Love To Do</h2>
      </div>

      <div className="interests-grid" data-animate>
        <span className="interest-pill"><i className="fa-solid fa-plane"></i> Travel</span>
        <span className="interest-pill"><i className="fa-solid fa-book"></i> Books</span>
        <span className="interest-pill"><i className="fa-solid fa-person-walking"></i> Hikes and Nature</span>
        <span className="interest-pill"><i className="fa-solid fa-cookie"></i>Baking</span>
        <span className="interest-pill"><i className="fa-solid fa-music"></i>Dance</span>
        <span className="interest-pill"><i className="fa-solid fa-tv"></i> SitComs, Sci-Fi, & Reality TV</span>
      </div>

      <div className="section-block">
        <h3 data-animate>Visual Snippets of My Life 📸</h3>
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
              <span className="gallery-caption">{item.caption}</span>
            </button>
          ))}
        </div>
      </div>

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
