import { Baby, AlignCenterHorizontal, ShieldCheck, Smile, SmilePlus, Medal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ClinicService {
  title: string;
  slug: string;
  icon: LucideIcon;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  overview: string;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ClinicService[] = [
  {
    title: "Dental Implants",
    slug: "dental-implants",
    icon: SmilePlus,
    shortDescription: "Permanent replacement solutions for missing teeth.",
    heroTitle: "Restore Missing Teeth With Dental Implants",
    heroDescription:
      "Advanced implant dentistry at Demystifying Smiles designed to restore function, confidence, and natural aesthetics under expert care.",
    image:
      "https://ik.imagekit.io/amddentalclinic/a75d41ac-17e7-4d01-beeb-4c178aad7ffd-Dental_Implants_B7iEOvSuy.jpg?w=1200",
    overview:
      "At Demystifying Smiles, Dental Implants are performed using advanced surgical protocols by experienced clinicians to ensure long-term stability and natural aesthetics. Led by Dr. Nikhil Bahuguna and Namrata Bahuguna, our clinic focuses on precision implant placement that restores both function and confidence. Dental implants act as artificial tooth roots that integrate with the jawbone, providing a permanent foundation for crowns or bridges. This treatment is ideal for patients seeking a fixed, durable, and natural-looking replacement for missing teeth.",
    benefits: [
      "Natural appearance and feel",
      "Improved chewing and speech ability",
      "Long-lasting and durable solution",
      "Prevents jawbone deterioration",
      "Restores facial structure and confidence",
      "Low maintenance oral care routine",
    ],
    process: [
      "Initial Consultation at Demystifying Smiles",
      "Digital Scanning & Treatment Planning",
      "Precision Implant Placement",
      "Healing & Osseointegration Phase",
      "Custom Crown Placement & Final Restoration",
    ],
    faqs: [
      {
        question: "Are dental implants safe at Demystifying Smiles?",
        answer:
          "Yes. At Demystifying Smiles, implants are placed using advanced sterile protocols and guided technology to ensure maximum safety and precision.",
      },
      {
        question: "How long do implants last?",
        answer:
          "With proper oral hygiene and regular checkups with Dr. Nikhil Bahuguna and Namrata Bahuguna, implants can last 15-25 years or even a lifetime.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "No. The procedure is performed under local anesthesia and is designed to be comfortable with minimal post-operative discomfort.",
      },
    ],
  },
  {
    title: "Smile Makeover",
    slug: "smile-makeover",
    icon: Medal,
    shortDescription: "Comprehensive cosmetic treatments for a perfect smile.",
    heroTitle: "Transform Your Smile at Demystifying Smiles",
    heroDescription:
      "Customized smile makeover treatments designed by Dr. Nikhil Bahuguna and Namrata Bahuguna to enhance confidence, aesthetics, and facial harmony.",
    image:
      "https://img.freepik.com/free-photo/close-up-perfect-smile_1149-1021.jpg?semt=ais_hybrid?w=1200",
    overview:
      "A Smile Makeover at Demystifying Smiles is a personalized cosmetic dentistry plan that combines multiple procedures such as veneers, whitening, bonding, and contouring. Every treatment plan is designed by Dr. Nikhil Bahuguna and Namrata Bahuguna after a detailed smile analysis to ensure natural, balanced, and aesthetically pleasing results. Our goal is not just to improve teeth but to enhance your entire facial appearance and confidence.",
    benefits: [
      "Dramatically improved smile aesthetics",
      "Boosted self-confidence",
      "Fully customized treatment plan",
      "Natural-looking cosmetic results",
      "Enhanced facial symmetry",
      "Long-lasting transformation",
    ],
    process: [
      "Digital Smile Analysis at Demystifying Smiles",
      "Consultation with Dr. Nikhil Bahuguna and Namrata Bahuguna",
      "Personalized Treatment Planning",
      "Cosmetic Dental Procedures",
      "Final Smile Design & Reveal",
    ],
    faqs: [
      {
        question: "What is included in a smile makeover?",
        answer:
          "At Demystifying Smiles, a smile makeover may include whitening, veneers, gum contouring, and alignment correction depending on your needs.",
      },
      {
        question: "How long does the transformation take?",
        answer:
          "Depending on complexity, treatments may take a few days to a few weeks under Dr. Nikhil Bahuguna and Namrata Bahuguna's supervision.",
      },
    ],
  },
  {
    title: "Root Canal Treatment",
    slug: "root-canal-treatment",
    icon: ShieldCheck,
    shortDescription: "Pain-free procedures preserving natural teeth.",
    heroTitle: "Save Your Natural Tooth Pain-Free",
    heroDescription:
      "Modern root canal treatment at Demystifying Smiles performed with precision and comfort to eliminate infection and preserve your natural tooth.",
    image:
      "https://img.freepik.com/free-photo/two-dentists-doing-their-work-dentist-s-clinic_329181-20747.jpg?semt=ais_hybrid?w=1200",
    overview:
      "At Demystifying Smiles, Root Canal Treatment is performed using advanced rotary instruments and modern anesthesia techniques by Dr. Nikhil Bahuguna and Namrata Bahuguna. The procedure focuses on removing infected pulp, disinfecting the canal, and sealing the tooth to prevent reinfection. This treatment helps preserve your natural tooth structure while eliminating pain and infection effectively.",
    benefits: [
      "Immediate pain relief",
      "Preserves natural tooth structure",
      "Eliminates infection effectively",
      "Improves long-term oral health",
      "Quick recovery time",
      "Prevents tooth extraction",
    ],
    process: [
      "Detailed Diagnosis at Demystifying Smiles",
      "Local Anesthesia & Comfort Preparation",
      "Cleaning of Infected Pulp",
      "Canal Shaping & Disinfection",
      "Sealing & Final Restoration",
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "No. At Demystifying Smiles, modern anesthesia ensures the procedure is comfortable and pain-free under Dr. Nikhil Bahuguna and Namrata Bahuguna.",
      },
      {
        question: "How many visits are required?",
        answer: "Most cases are completed in 1-2 visits depending on infection severity.",
      },
    ],
  },
  {
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    icon: Smile,
    shortDescription: "Professional whitening for brighter smiles.",
    heroTitle: "Achieve a Brighter Smile Instantly",
    heroDescription:
      "Safe and effective professional teeth whitening at Demystifying Smiles for visible, long-lasting brightness.",
    image:
      "https://img.freepik.com/premium-photo/woman-teeth-before-after-whitening-white-background-dental-clinic-patient-image-symbolizes_168410-1694.jpg?semt=ais_hybrid?w=1200",
    overview:
      "Teeth Whitening at Demystifying Smiles is a safe, clinically supervised cosmetic procedure performed by Dr. Nikhil Bahuguna and Namrata Bahuguna. It removes stains caused by food, beverages, and lifestyle habits to restore natural brightness. The procedure is quick, effective, and tailored to individual sensitivity levels.",
    benefits: [
      "Noticeably whiter teeth",
      "Fast in-clinic results",
      "Safe and controlled procedure",
      "Boosts confidence instantly",
      "Long-lasting brightness",
      "Non-invasive cosmetic treatment",
    ],
    process: [
      "Initial Dental Evaluation",
      "Shade Assessment",
      "Professional Whitening Session",
      "Result Evaluation",
      "Aftercare Instructions",
    ],
    faqs: [
      {
        question: "Is whitening safe for enamel?",
        answer:
          "Yes. At Demystifying Smiles, we use enamel-safe whitening systems supervised by Dr. Nikhil Bahuguna and Namrata Bahuguna.",
      },
      {
        question: "How long do results last?",
        answer: "Results typically last 6-12 months depending on diet and oral hygiene habits.",
      },
    ],
  },
  {
    title: "Clear Aligners",
    slug: "clear-aligners",
    icon: AlignCenterHorizontal,
    shortDescription: "Discreet orthodontic treatment.",
    heroTitle: "Straighten Teeth Invisibly",
    heroDescription:
      "Comfortable, removable, and nearly invisible aligners at Demystifying Smiles designed for modern orthodontic correction.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8G8Oy0FfApJxAmvFMSAh8RWdUM6AGixxbwg&s?w=1200",
    overview:
      "Clear Aligners at Demystifying Smiles provide a modern orthodontic solution supervised by Dr. Nikhil Bahuguna and Namrata Bahuguna. Using digital scanning and 3D treatment planning, aligners gradually move teeth into correct alignment without metal braces, ensuring comfort and aesthetics throughout treatment.",
    benefits: [
      "Virtually invisible appearance",
      "Comfortable daily wear",
      "Removable for eating & cleaning",
      "Improved oral hygiene",
      "Predictable digital results",
      "No metal wires or brackets",
    ],
    process: [
      "Orthodontic Consultation",
      "Digital 3D Scan",
      "Custom Aligner Fabrication",
      "Regular Progress Monitoring",
      "Retention Phase",
    ],
    faqs: [
      {
        question: "How many hours should aligners be worn?",
        answer: "At Demystifying Smiles, we recommend 20-22 hours daily for optimal results.",
      },
      {
        question: "How long is the treatment duration?",
        answer: "Typically 6-18 months depending on case complexity.",
      },
    ],
  },
  {
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    icon: Baby,
    shortDescription: "Gentle dental care for children.",
    heroTitle: "Healthy Smiles for Growing Kids",
    heroDescription:
      "Compassionate pediatric dental care at Demystifying Smiles in a friendly and stress-free environment.",
    image:
      "https://img.magnific.com/free-photo/happy-afro-kid-regular-check-up-teeth-dental-clinic_651396-1411.jpg?semt=ais_hybrid?w=1200",
    overview:
      "Pediatric Dentistry at Demystifying Smiles focuses on preventive and gentle dental care for children under the supervision of Dr. Nikhil Bahuguna and Namrata Bahuguna. Our clinic ensures a friendly environment where children feel safe, relaxed, and confident during dental visits.",
    benefits: [
      "Child-friendly environment",
      "Preventive dental care",
      "Early diagnosis of issues",
      "Education for oral hygiene habits",
      "Stress-free experience",
      "Healthy long-term dental development",
    ],
    process: [
      "Initial Child Dental Checkup",
      "Gentle Cleaning & Examination",
      "Preventive Treatments (if needed)",
      "Parental Guidance Session",
      "Follow-up Monitoring",
    ],
    faqs: [
      {
        question: "When should a child first visit the dentist?",
        answer:
          "At Demystifying Smiles, we recommend the first visit by age 1 or within 6 months of the first tooth eruption.",
      },
      {
        question: "How do you handle anxious children?",
        answer:
          "Our clinic uses behavior management techniques and a friendly approach to ensure comfort for every child.",
      },
    ],
  },
];
