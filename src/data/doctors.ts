import nikhilImage from "../assets/nikhil.png";
import namrataImage from "../assets/namrata.webp";

export interface DoctorProfile {
  name: string;
  designation: string;
  image: string;
  mediaWrapperClassName?: string;
  imageClassName?: string;
  experience: string;
  education: string[];
  bio: string;
  achievements?: string[];
  memberships?: string[];
}

export const doctors: DoctorProfile[] = [
  {
    name: "Dr. Nikhil Bahuguna",
    designation: "MDS (Conservative Dentistry & Endodontics)",
    image: nikhilImage,
    mediaWrapperClassName: "bg-[#f8efe1]",
    experience: "20+ Years",
    education: [
      "BDS - Bharati Vidyapeeth Dental College & Hospital, Pune (1996-2001)",
      "MDS - Conservative Dentistry & Endodontics, Bapuji Dental College, Davangere (2001-2004)",
    ],
    bio: `
Dr. Nikhil Bahuguna is one of India's leading experts in aesthetic and restorative dentistry. He completed his BDS from Bharati Vidyapeeth Dental College and Hospital, Pune, followed by an MDS in Conservative Dentistry and Endodontics from Bapuji Dental College and Hospital.

He served as Professor and Head of the Department of Conservative Dentistry and Endodontics at Kalka Dental College and Hospital, Meerut from 2005 to 2018.

Dr. Bahuguna is a Diplomate of the American Board of Aesthetic Dentistry, Fellow of the International College of Continuing Dental Education, and Fellow of the American Society for Dental Aesthetics.

He is an accredited member and Board Director of the Indian Academy of Aesthetic and Cosmetic Dentistry and has previously served as its President.
    `,
    achievements: [
      "Diplomate - American Board of Aesthetic Dentistry",
      "Fellow - International College of Continuing Dental Education",
      "Fellow - American Society for Dental Aesthetics",
      "Former President - Indian Academy of Aesthetic & Cosmetic Dentistry",
      "Board Director - IAACD",
      "Guest Faculty - World Clinical Laser Institute (USA)",
    ],
    memberships: [
      "Indian Academy of Aesthetic & Cosmetic Dentistry",
      "Indian Endodontic Society",
      "Society of Oral Laser Applications in India",
    ],
  },
  {
    name: "Dr. Namrata Bahuguna",
    designation: "Dentist",
    image: namrataImage,
    mediaWrapperClassName: "bg-[#f8efe1]",
    experience: "8+ Years",
    education: ["BDS"],
    bio: `
Dr. Namrata Bahuguna is a renowned and experienced Dentist with more than eight years of clinical experience. She has been associated with leading hospitals and dental institutions and is known for her compassionate, patient-centric approach.

She manages complex dental cases using modern technologies while maintaining the highest professional and ethical standards. Her focus is on providing scientifically sound advice and comfortable treatment experiences for every patient.
    `,
  },
];
