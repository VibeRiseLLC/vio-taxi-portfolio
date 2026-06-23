/**
 * translations.ts
 * Visible copy for the fictional Northline Private Hire portfolio demo.
 * Keep business data (phone, email, service area) in business.ts.
 */

export type Lang = "nl" | "en";

export const t = {
  nav: {
    home: { nl: "Home", en: "Home" },
    book: { nl: "Rit boeken", en: "Book a Ride" },
    services: { nl: "Diensten", en: "Services" },
    contact: { nl: "Contact", en: "Contact" },
  },

  hero: {
    title: {
      nl: "Premium private hire vanuit Groningen",
      en: "Premium private hire from Groningen",
    },
    subtitle: {
      nl: "Rustige luchthaventransfers en privechauffeurritten voor reizigers die duidelijke afspraken, comfort en discretie waarderen.",
      en: "Calm airport transfers and private chauffeur rides for passengers who value clear planning, comfort and discretion.",
    },
    support: {
      nl: "Voor Schiphol Airport, zakelijke afspraken, hotels en geplande ritten in Noord-Nederland.",
      en: "For Schiphol Airport, business appointments, hotels and planned rides across the North of the Netherlands.",
    },
    ctaCall: { nl: "Bel nu", en: "Call Now" },
    ctaWhatsapp: { nl: "WhatsApp ons", en: "WhatsApp Us" },
    ctaBook: { nl: "Rit boeken", en: "Book a Ride" },
    urgentNote: {
      nl: "Beschikbaar op aanvraag voor luchthavenvervoer, zakelijke ritten en privevervoer.",
      en: "Available by request for airport transfers, business rides and private travel.",
    },
    trustBadge: {
      nl: "Fictionele portfolio demo",
      en: "Fictional portfolio demo",
    },
    popularRides: {
      nl: "Voorbeeldroutes:",
      en: "Sample routes:",
    },
    ctaMicrocopy: {
      nl: "Plan vooruit via het formulier of neem direct contact op voor een offerte.",
      en: "Plan ahead with the form or contact us directly for a quote.",
    },
  },

  trustStrip: {
    items: [
      {
        icon: "✈️",
        label: { nl: "Luchthaventransfers", en: "Airport transfers" },
      },
      {
        icon: "🕰️",
        label: { nl: "Gepland vervoer", en: "Planned rides" },
      },
      {
        icon: "💼",
        label: { nl: "Zakelijke afspraken", en: "Business appointments" },
      },
      {
        icon: "🧳",
        label: { nl: "Bagagevriendelijk", en: "Luggage friendly" },
      },
      {
        icon: "📍",
        label: { nl: "Groningen basis", en: "Groningen based" },
      },
      {
        icon: "📱",
        label: { nl: "Duidelijke bevestiging", en: "Clear confirmation" },
      },
    ],
  },

  howItWorks: {
    heading: { nl: "Hoe het werkt", en: "How it works" },
    step1title: { nl: "1. Vraag uw rit aan", en: "1. Request your ride" },
    step1desc: {
      nl: "Gebruik het formulier, stuur WhatsApp of bel voor een korte afstemming.",
      en: "Use the form, send a WhatsApp message or call for a quick check.",
    },
    step2title: { nl: "2. Ontvang een offerte", en: "2. Receive a quote" },
    step2desc: {
      nl: "De ritdetails en prijsindicatie worden handmatig bevestigd.",
      en: "Ride details and the price estimate are confirmed manually.",
    },
    step3title: { nl: "3. Reis ontspannen", en: "3. Travel calmly" },
    step3desc: {
      nl: "Uw geplande rit verloopt met heldere communicatie en een comfortabele auto.",
      en: "Your planned ride runs with clear communication and a comfortable car.",
    },
    notice: {
      nl: "Dit portfolio gebruikt demo-aanvragen; een formulier is geen echte boekingsbevestiging.",
      en: "This portfolio uses demo requests; a form submission is not a real booking confirmation.",
    },
  },

  meetDriver: {
    heading: {
      nl: "Gemaakt voor rustige, geplande ritten",
      en: "Made for calm, planned rides",
    },
    body: {
      nl: "Northline Private Hire is een fictioneel merk voor een portfolio-demo. De site laat zien hoe een premium private-hire ervaring kan voelen: directe contactopties, heldere ritinformatie en een rustige serviceflow.",
      en: "Northline Private Hire is a fictional brand for a portfolio demo. The site shows how a premium private-hire experience can feel: direct contact options, clear ride details and a calm service flow.",
    },
    points: [
      {
        nl: "Directe contactopties voor offerteaanvragen",
        en: "Direct contact options for quote requests",
      },
      {
        nl: "Geschikt voor transfers en zakelijke ritten",
        en: "Suited to transfers and business rides",
      },
      {
        nl: "Gericht op Groningen, Haren, Hoogezand, Sappemeer, Assen en Schiphol",
        en: "Focused on Groningen, Haren, Hoogezand, Sappemeer, Assen and Schiphol",
      },
      {
        nl: "Duidelijke handmatige bevestiging",
        en: "Clear manual confirmation",
      },
    ],
  },

  vipService: {
    heading: {
      nl: "Private-hire service zonder ruis",
      en: "Private-hire service without noise",
    },
    intro: {
      nl: "De demo is geschreven voor reizigers die liever vooraf plannen dan improviseren. De toon is rustig, zakelijk en persoonlijk zonder overdreven claims.",
      en: "The demo is written for passengers who prefer planning ahead over improvising. The tone is calm, professional and personal without exaggerated claims.",
    },
    points: [
      {
        nl: "Premium luchthaventransfers naar Schiphol Airport",
        en: "Premium airport transfers to Schiphol Airport",
      },
      {
        nl: "Privechauffeurritten voor afspraken en hotels",
        en: "Private chauffeur rides for appointments and hotels",
      },
      {
        nl: "Rustige communicatie voor en tijdens de rit",
        en: "Calm communication before and during the ride",
      },
      {
        nl: "Heldere offerte voor geplande routes",
        en: "Clear quote for planned routes",
      },
      {
        nl: "Mobielvriendelijke Call, WhatsApp en boekingsacties",
        en: "Mobile-friendly Call, WhatsApp and booking actions",
      },
      {
        nl: "Geen echte reviews, awards of ratings in deze demo",
        en: "No real reviews, awards or ratings in this demo",
      },
    ],
  },

  mercedes: {
    heading: {
      nl: "Een premium sfeer met demo-beeldmateriaal",
      en: "A premium feel with demo imagery",
    },
    body: {
      nl: "De beelden op deze website zijn neutrale portfolio-assets. Ze tonen de gewenste sfeer zonder realistische bedrijfsclaims of herkenbare voertuiginformatie.",
      en: "The visuals on this website are neutral portfolio assets. They show the intended atmosphere without real business claims or identifiable vehicle details.",
    },
  },

  services: {
    heading: { nl: "Diensten", en: "Services" },
    items: [
      {
        icon: "✈️",
        title: { nl: "Airport Transfers", en: "Airport Transfers" },
        desc: {
          nl: "Geplande transfers van Groningen en omgeving naar Schiphol Airport en terug.",
          en: "Planned transfers from Groningen and surrounding towns to Schiphol Airport and back.",
        },
      },
      {
        icon: "💼",
        title: { nl: "Zakelijke ritten", en: "Business Rides" },
        desc: {
          nl: "Rustig, representatief vervoer voor vergaderingen, hotels en zakelijke afspraken.",
          en: "Calm, representative travel for meetings, hotels and business appointments.",
        },
      },
      {
        icon: "🕴️",
        title: { nl: "Privechauffeur", en: "Private Chauffeur" },
        desc: {
          nl: "Comfortabele ritten op afspraak voor priveafspraken, diners en events.",
          en: "Comfortable rides by appointment for private plans, dinners and events.",
        },
      },
      {
        icon: "🧾",
        title: { nl: "Offerte op maat", en: "Custom Quotes" },
        desc: {
          nl: "Vooraf duidelijkheid over route, tijd, bagage en prijsindicatie.",
          en: "Advance clarity on route, timing, luggage and price estimate.",
        },
      },
    ],
  },

  groningenVervoer: {
    heading: {
      nl: "Servicegebied voor deze demo",
      en: "Service area for this demo",
    },
    intro: {
      nl: "Northline Private Hire is gepositioneerd rond Groningen, Haren, Hoogezand, Sappemeer, Assen en Schiphol Airport. Dit zijn demo-servicegebieden voor portfolio-doeleinden.",
      en: "Northline Private Hire is positioned around Groningen, Haren, Hoogezand, Sappemeer, Assen and Schiphol Airport. These are demo service areas for portfolio purposes.",
    },
  },

  whyUs: {
    heading: { nl: "Waarom Northline?", en: "Why Northline?" },
    points: [
      {
        title: { nl: "Premium, maar nuchter", en: "Premium, but grounded" },
        desc: {
          nl: "Een rustige uitstraling met duidelijke informatie en zonder harde verkooppraat.",
          en: "A calm presentation with clear information and no heavy sales language.",
        },
      },
      {
        title: { nl: "Sterke mobiele acties", en: "Strong mobile actions" },
        desc: {
          nl: "Bellen, WhatsApp en boeken blijven snel bereikbaar op kleine schermen.",
          en: "Call, WhatsApp and booking remain easy to reach on small screens.",
        },
      },
      {
        title: { nl: "Handmatige bevestiging", en: "Manual confirmation" },
        desc: {
          nl: "De ritflow maakt duidelijk dat aanvragen eerst worden afgestemd.",
          en: "The ride flow makes it clear that requests are checked first.",
        },
      },
      {
        title: { nl: "Geschikt voor transfers", en: "Built for transfers" },
        desc: {
          nl: "Routes, tijden, bagage en type rit krijgen allemaal een eigen plek.",
          en: "Routes, times, luggage and ride type all have their own place.",
        },
      },
      {
        title: { nl: "Fictioneel en transparant", en: "Fictional and transparent" },
        desc: {
          nl: "De demo bevat geen echte reviews, ratings, awards of licentieclaims.",
          en: "The demo contains no real reviews, ratings, awards or licence claims.",
        },
      },
    ],
  },

  testimonials: {
    heading: {
      nl: "Fictionele demo-testimonials",
      en: "Fictional demo testimonials",
    },
    intro: {
      nl: "Voorbeeldteksten voor presentatie-doeleinden; dit zijn geen echte klantreviews.",
      en: "Sample copy for presentation purposes; these are not real customer reviews.",
    },
    items: [
      {
        quote: {
          nl: "De rit naar Schiphol voelde zorgvuldig gepland en rustig gecommuniceerd.",
          en: "The Schiphol ride felt carefully planned and calmly communicated.",
        },
        author: { nl: "Fictionele reiziger A", en: "Fictional passenger A" },
      },
      {
        quote: {
          nl: "Prettig voor een vroege zakelijke afspraak: helder, discreet en overzichtelijk.",
          en: "Useful for an early business appointment: clear, discreet and easy to follow.",
        },
        author: { nl: "Fictionele zakelijke gast", en: "Fictional business guest" },
      },
      {
        quote: {
          nl: "Het formulier vraagt precies de informatie die je vooraf wilt delen.",
          en: "The form asks for exactly the details you want to share beforehand.",
        },
        author: { nl: "Fictionele hotelgast", en: "Fictional hotel guest" },
      },
    ],
  },

  faq: {
    heading: { nl: "Veelgestelde vragen", en: "Frequently asked questions" },
    items: [
      {
        q: {
          nl: "Is Northline Private Hire een echt bedrijf?",
          en: "Is Northline Private Hire a real company?",
        },
        a: {
          nl: "Nee. Dit is een portfolio demonstratiewebsite voor een fictioneel private-hire merk.",
          en: "No. This is a portfolio demonstration website for a fictional private-hire brand.",
        },
      },
      {
        q: {
          nl: "Kan ik een luchthavenrit naar Schiphol aanvragen?",
          en: "Can I request an airport ride to Schiphol?",
        },
        a: {
          nl: "In de demo kunt u zo'n rit aanvragen via het formulier. Er wordt geen echte boeking gemaakt.",
          en: "In the demo, you can request that ride through the form. No real booking is created.",
        },
      },
      {
        q: { nl: "Kan ik zakelijk vervoer aanvragen?", en: "Can I request business transport?" },
        a: {
          nl: "Ja, de demo ondersteunt zakelijke ritten als voorbeeldscenario in de boekingsflow.",
          en: "Yes, the demo supports business rides as a sample scenario in the booking flow.",
        },
      },
      {
        q: { nl: "Hoe werkt de bevestiging?", en: "How does confirmation work?" },
        a: {
          nl: "Een aanvraag is geen automatische bevestiging. De interface laat zien hoe handmatige bevestiging kan worden uitgelegd.",
          en: "A request is not an automatic confirmation. The interface shows how manual confirmation can be explained.",
        },
      },
      {
        q: {
          nl: "Zijn de testimonials en beelden echt?",
          en: "Are the testimonials and visuals real?",
        },
        a: {
          nl: "Nee. De testimonials zijn expliciet fictioneel en de beelden zijn neutrale demo-assets.",
          en: "No. The testimonials are explicitly fictional and the visuals are neutral demo assets.",
        },
      },
    ],
  },

  finalCta: {
    heading: {
      nl: "Vraag een rit of offerte aan",
      en: "Request a ride or quote",
    },
    sub: {
      nl: "Bekijk hoe een premium private-hire boekingsflow werkt in deze fictional demo.",
      en: "See how a premium private-hire booking flow works in this fictional demo.",
    },
    ctaCall: { nl: "Bel nu", en: "Call Now" },
    ctaWhatsapp: { nl: "WhatsApp ons", en: "WhatsApp Us" },
    ctaBook: { nl: "Rit boeken", en: "Book a Ride" },
  },

  bookPage: {
    title: { nl: "Rit boeken", en: "Book a Ride" },
    intro: {
      nl: "Vul het formulier in om een demo-ritaanvraag of offerteaanvraag voor Northline Private Hire samen te stellen.",
      en: "Fill in the form to compose a demo ride request or quote request for Northline Private Hire.",
    },
    noticeTitle: { nl: "Let op", en: "Please note" },
    notice: {
      nl: "Dit is een portfolio-demo. Een ingevuld formulier maakt geen echte boeking aan.",
      en: "This is a portfolio demo. A submitted form does not create a real booking.",
    },
    labelName: { nl: "Naam", en: "Name" },
    labelPhone: { nl: "Telefoonnummer", en: "Phone number" },
    labelEmail: { nl: "E-mail (optioneel)", en: "Email (optional)" },
    labelPickup: { nl: "Ophaaladres", en: "Pickup address" },
    labelDestination: { nl: "Bestemming", en: "Destination" },
    labelDate: { nl: "Datum", en: "Date" },
    labelTime: { nl: "Tijd", en: "Time" },
    labelPassengers: { nl: "Aantal passagiers", en: "Number of passengers" },
    labelLuggage: { nl: "Bagage (optioneel)", en: "Luggage (optional)" },
    labelRideType: { nl: "Type rit", en: "Ride type" },
    labelNotes: { nl: "Opmerkingen (optioneel)", en: "Notes (optional)" },
    rideTypes: {
      local: { nl: "Lokale rit", en: "Local ride" },
      airport: { nl: "Luchthaventransfer", en: "Airport transfer" },
      station: { nl: "Station of hotel", en: "Station or hotel" },
      hospital: { nl: "Afspraak", en: "Appointment" },
      business: { nl: "Zakelijke rit", en: "Business ride" },
      other: { nl: "Anders", en: "Other" },
    },
    confirmCheckbox: {
      nl: "Ik begrijp dat dit een portfolio-demo is en dat mijn aanvraag geen echte boeking bevestigt.",
      en: "I understand this is a portfolio demo and that my request does not confirm a real booking.",
    },
    submit: { nl: "Aanvraag versturen", en: "Send request" },
    successTitle: { nl: "Demo-aanvraag klaar", en: "Demo request ready" },
    successText: {
      nl: "Uw aanvraag is samengesteld. Gebruik WhatsApp of e-mail om te zien hoe de demo-overdracht werkt.",
      en: "Your request has been composed. Use WhatsApp or email to see how the demo handoff works.",
    },
    whatsappBtn: { nl: "Stuur ook via WhatsApp", en: "Also send via WhatsApp" },
    mailtoBtn: { nl: "Stuur ook per e-mail", en: "Also send by email" },
    newRequest: { nl: "Nieuwe aanvraag", en: "New request" },
    errors: {
      required: { nl: "Dit veld is verplicht.", en: "This field is required." },
      checkboxRequired: {
        nl: "U moet dit bevestigen om door te gaan.",
        en: "You must confirm this to proceed.",
      },
    },
  },

  servicesPage: {
    title: { nl: "Diensten", en: "Services" },
    intro: {
      nl: "Northline Private Hire is gepositioneerd als premium demo-concept voor luchthaventransfers en privechauffeurritten. De inhoud is fictief en bedoeld als portfolio showcase.",
      en: "Northline Private Hire is positioned as a premium demo concept for airport transfers and private chauffeur rides. The content is fictional and intended as a portfolio showcase.",
    },
    bookBtn: { nl: "Rit boeken", en: "Book a Ride" },
    whatsappBtn: { nl: "Vraag offerte", en: "Request Quote" },
    sections: [
      {
        icon: "✈️",
        title: { nl: "Schiphol Transfers", en: "Schiphol Transfers" },
        desc: {
          nl: "Voorbeeldservice voor comfortabele ritten tussen Groningen, Haren, Hoogezand, Sappemeer, Assen en Schiphol Airport.",
          en: "Sample service for comfortable rides between Groningen, Haren, Hoogezand, Sappemeer, Assen and Schiphol Airport.",
        },
      },
      {
        icon: "💼",
        title: { nl: "Zakelijk vervoer", en: "Business Transport" },
        desc: {
          nl: "Demo-copy voor directievervoer, hotelgasten en afspraken waarbij rust en representatie belangrijk zijn.",
          en: "Demo copy for executive travel, hotel guests and appointments where calm and presentation matter.",
        },
      },
      {
        icon: "🕴️",
        title: { nl: "Privechauffeur", en: "Private Chauffeur" },
        desc: {
          nl: "Geplande ritten voor diners, events en persoonlijke afspraken met duidelijke communicatie vooraf.",
          en: "Planned rides for dinners, events and personal appointments with clear communication in advance.",
        },
      },
      {
        icon: "🧳",
        title: { nl: "Hotel & station", en: "Hotel & Station" },
        desc: {
          nl: "Voorbeeldflow voor ophalen bij hotels, stations en adressen met bagage-informatie in de aanvraag.",
          en: "Sample flow for pickups at hotels, stations and addresses with luggage details in the request.",
        },
      },
      {
        icon: "🧾",
        title: { nl: "Offerte op maat", en: "Custom Quote" },
        desc: {
          nl: "Een rustige offerteflow voor langere ritten waarbij route, tijd en prijsindicatie eerst worden afgestemd.",
          en: "A calm quote flow for longer rides where route, time and estimate are checked first.",
        },
      },
    ],
  },

  contactPage: {
    title: { nl: "Contact", en: "Contact" },
    intro: {
      nl: "Gebruik de demo-contactopties voor Call, WhatsApp of e-mail. Northline Private Hire is een fictioneel merk.",
      en: "Use the demo contact options for Call, WhatsApp or email. Northline Private Hire is a fictional brand.",
    },
    callBtn: { nl: "Bel nu", en: "Call Now" },
    whatsappBtn: { nl: "WhatsApp ons", en: "WhatsApp Us" },
    emailBtn: { nl: "E-mail sturen", en: "Send email" },
    serviceAreaHeading: { nl: "Demo-rijgebied", en: "Demo service area" },
    mapPlaceholder: { nl: "Bekijk Groningen op Google Maps", en: "View Groningen on Google Maps" },
    urgentNote: {
      nl: "Portfolio demo: deze contactgegevens zijn voorbeeldgegevens en horen niet bij een echte vervoerder.",
      en: "Portfolio demo: these contact details are sample data and do not belong to a real transport provider.",
    },
  },

  privacyPage: {
    title: { nl: "Privacyverklaring", en: "Privacy Policy" },
  },

  termsPage: {
    title: { nl: "Boekingsvoorwaarden", en: "Booking Terms" },
  },

  footer: {
    serviceArea: { nl: "Demo-rijgebied", en: "Demo service area" },
    privacyLink: { nl: "Privacyverklaring", en: "Privacy Policy" },
    termsLink: { nl: "Boekingsvoorwaarden", en: "Booking Terms" },
    disclaimer: {
      nl: "Ritaanvragen in deze demo zijn niet verbonden aan een echte vervoerder.",
      en: "Ride requests in this demo are not connected to a real transport provider.",
    },
    rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
    tagline: {
      nl: "Premium airport transfers en privechauffeurritten.",
      en: "Premium airport transfers and private chauffeur rides.",
    },
  },

  stickyBar: {
    call: { nl: "Bellen", en: "Call" },
    whatsapp: { nl: "WhatsApp", en: "WhatsApp" },
  },
} as const;

/** Helper to pick the right language string */
export function tx(field: { nl: string; en: string }, lang: Lang): string {
  return field[lang];
}
