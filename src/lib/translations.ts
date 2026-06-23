/**
 * translations.ts
 * Visible copy for the fictional Noordlijn Chauffeurs portfolio concept.
 * Keep business data (phone, email, service area) in business.ts.
 */

export type Lang = "nl" | "en";

export const t = {
  nav: {
    home: { nl: "Home", en: "Home" },
    book: { nl: "Transfer plannen", en: "Plan a Transfer" },
    services: { nl: "Chauffeurdiensten", en: "Chauffeur Services" },
    contact: { nl: "Contact", en: "Contact" },
  },

  hero: {
    title: {
      nl: "Noordlijn Chauffeurs vanuit Groningen",
      en: "Noordlijn Chauffeurs from Groningen",
    },
    subtitle: {
      nl: "Premium chauffeurservice en luchthaventransfers voor reizigers die rust, discretie en duidelijke afspraken waarderen.",
      en: "Premium chauffeur service and airport transfers for travellers who value calm, discretion and clear arrangements.",
    },
    support: {
      nl: "Voor Eelde Airport, Schiphol, zakelijke afspraken en langeafstandstrajecten in Noord-Nederland.",
      en: "For Eelde Airport, Schiphol, business appointments and long-distance journeys across Northern Netherlands.",
    },
    ctaCall: { nl: "Bel nu", en: "Call Now" },
    ctaWhatsapp: { nl: "WhatsApp", en: "WhatsApp" },
    ctaBook: { nl: "Transfer plannen", en: "Plan a Transfer" },
    urgentNote: {
      nl: "Op aanvraag voor luchthaventransfers, business travel en langeafstandschauffeurservice.",
      en: "Available by request for airport transfers, business travel and long-distance chauffeur service.",
    },
    trustBadge: {
      nl: "Premium chauffeurconcept",
      en: "Premium chauffeur concept",
    },
    popularRides: {
      nl: "Veelgevraagde trajecten:",
      en: "Common journeys:",
    },
    ctaMicrocopy: {
      nl: "Plan uw transfer vooraf of vraag een offerte aan voor een langere privechauffeurreis.",
      en: "Plan your transfer in advance or request a quote for a longer private chauffeur journey.",
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
        label: { nl: "Vooraf gepland", en: "Pre-booked" },
      },
      {
        icon: "💼",
        label: { nl: "Zakelijk vervoer", en: "Business travel" },
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
        label: { nl: "Heldere afstemming", en: "Clear coordination" },
      },
    ],
  },

  howItWorks: {
    heading: { nl: "Hoe het werkt", en: "How it works" },
    step1title: { nl: "1. Vraag uw traject aan", en: "1. Request your journey" },
    step1desc: {
      nl: "Deel uw ophaallocatie, bestemming, reistijd en eventuele vlucht- of bagagegegevens.",
      en: "Share your pickup location, destination, travel time and any flight or luggage details.",
    },
    step2title: { nl: "2. Ontvang afstemming", en: "2. Receive coordination" },
    step2desc: {
      nl: "Traject, timing en prijsindicatie worden overzichtelijk afgestemd voordat u vertrekt.",
      en: "Route, timing and price estimate are coordinated clearly before you travel.",
    },
    step3title: { nl: "3. Reis in alle rust", en: "3. Travel calmly" },
    step3desc: {
      nl: "Uw geplande chauffeurstraject is ingericht op comfort, discretie en punctuele communicatie.",
      en: "Your planned chauffeur journey is shaped around comfort, discretion and punctual communication.",
    },
    notice: {
      nl: "Aanvragen via deze website zijn bedoeld voor vooraf geplande chauffeurstrajecten en worden niet automatisch bevestigd.",
      en: "Requests through this website are intended for pre-booked chauffeur journeys and are not automatically confirmed.",
    },
  },

  meetDriver: {
    heading: {
      nl: "Chauffeurservice voor geplande reizen",
      en: "Chauffeur service for planned journeys",
    },
    body: {
      nl: "Noordlijn Chauffeurs is gepositioneerd voor reizigers die liever vooraf plannen dan improviseren. De ervaring draait om duidelijke trajectinformatie, rustige communicatie en een representatieve aankomst.",
      en: "Noordlijn Chauffeurs is positioned for travellers who prefer planning ahead over improvising. The experience focuses on clear journey details, calm communication and a polished arrival.",
    },
    points: [
      {
        nl: "Luchthaventransfers naar Eelde Airport en Schiphol",
        en: "Airport transfers to Eelde Airport and Schiphol",
      },
      {
        nl: "Zakelijke reizen en directievervoer op afspraak",
        en: "Business travel and executive transport by appointment",
      },
      {
        nl: "Langeafstandstrajecten vanuit Groningen en Noord-Nederland",
        en: "Long-distance journeys from Groningen and Northern Netherlands",
      },
      {
        nl: "Duidelijke afstemming voor vertrek",
        en: "Clear coordination before departure",
      },
    ],
  },

  vipService: {
    heading: {
      nl: "Rustig, discreet en vooraf geregeld",
      en: "Calm, discreet and arranged in advance",
    },
    intro: {
      nl: "De service is geschreven voor transfers, zakelijke afspraken en privechauffeurstrajecten waarbij timing, comfort en betrouwbaarheid belangrijker zijn dan haastige boekingstaal.",
      en: "The service is framed around transfers, business appointments and private chauffeur journeys where timing, comfort and reliability matter more than rushed booking language.",
    },
    points: [
      {
        nl: "Airport transfers naar Schiphol en Eelde Airport",
        en: "Airport transfers to Schiphol and Eelde Airport",
      },
      {
        nl: "Business travel voor afspraken, hotels en ontvangsten",
        en: "Business travel for appointments, hotels and hosted guests",
      },
      {
        nl: "Langeafstandschauffeurservice binnen en buiten Noord-Nederland",
        en: "Long-distance chauffeur service in and beyond Northern Netherlands",
      },
      {
        nl: "Heldere offerte voor geplande trajecten",
        en: "Clear quote for planned journeys",
      },
      {
        nl: "Mobielvriendelijke contact- en aanvraagacties",
        en: "Mobile-friendly contact and request actions",
      },
      {
        nl: "Geen ratings, awards of niet-verifieerbare claims",
        en: "No ratings, awards or unverifiable claims",
      },
    ],
  },

  mercedes: {
    heading: {
      nl: "Een ingetogen premium sfeer",
      en: "An understated premium feel",
    },
    body: {
      nl: "De visuele stijl ondersteunt een rustige chauffeurervaring: donker, helder, verzorgd en gericht op reizigers die waarde hechten aan comfort en discretie.",
      en: "The visual style supports a calm chauffeur experience: dark, clear, polished and focused on travellers who value comfort and discretion.",
    },
  },

  services: {
    heading: { nl: "Chauffeurdiensten", en: "Chauffeur Services" },
    items: [
      {
        icon: "✈️",
        title: { nl: "Airport transfers", en: "Airport Transfers" },
        desc: {
          nl: "Vooraf geplande transfers tussen Groningen, Eelde Airport, Assen en Schiphol.",
          en: "Pre-booked transfers between Groningen, Eelde Airport, Assen and Schiphol.",
        },
      },
      {
        icon: "💼",
        title: { nl: "Business travel", en: "Business Travel" },
        desc: {
          nl: "Representatief vervoer voor afspraken, hotelgasten, zakelijke ontvangsten en dagprogramma's.",
          en: "Polished transport for appointments, hotel guests, hosted visitors and business itineraries.",
        },
      },
      {
        icon: "🕴️",
        title: { nl: "Privechauffeur", en: "Private Chauffeur" },
        desc: {
          nl: "Chauffeurservice op afspraak voor diners, events, adressen en rustige priveverplaatsingen.",
          en: "Chauffeur service by appointment for dinners, events, addresses and calm private travel.",
        },
      },
      {
        icon: "🛣️",
        title: { nl: "Langeafstandstrajecten", en: "Long-Distance Journeys" },
        desc: {
          nl: "Comfortabel privevervoer vanuit Noord-Nederland naar bestemmingen verder weg.",
          en: "Comfortable private transport from Northern Netherlands to destinations farther afield.",
        },
      },
    ],
  },

  groningenVervoer: {
    heading: {
      nl: "Gebaseerd in Groningen",
      en: "Based in Groningen",
    },
    intro: {
      nl: "Noordlijn Chauffeurs richt zich op vooraf geplande trajecten vanuit Groningen, Hoogezand, Assen en Noord-Nederland naar onder meer Eelde Airport en Schiphol.",
      en: "Noordlijn Chauffeurs focuses on pre-booked journeys from Groningen, Hoogezand, Assen and Northern Netherlands to destinations including Eelde Airport and Schiphol.",
    },
  },

  whyUs: {
    heading: { nl: "Waarom Noordlijn?", en: "Why Noordlijn?" },
    points: [
      {
        title: { nl: "Premium zonder overstatement", en: "Premium without overstatement" },
        desc: {
          nl: "Een rustige presentatie met duidelijke informatie, zonder harde verkooppraat of niet-verifieerbare claims.",
          en: "A calm presentation with clear information, without heavy sales language or unverifiable claims.",
        },
      },
      {
        title: { nl: "Gericht op geplande trajecten", en: "Built for planned journeys" },
        desc: {
          nl: "De aanvraagflow ondersteunt ophaaladres, bestemming, tijd, bagage en type traject.",
          en: "The request flow supports pickup address, destination, time, luggage and journey type.",
        },
      },
      {
        title: { nl: "Sterk op luchthavenvervoer", en: "Strong for airport transfers" },
        desc: {
          nl: "De content is ingericht rond Schiphol, Eelde Airport en zakelijke reisschema's.",
          en: "The content is structured around Schiphol, Eelde Airport and business travel schedules.",
        },
      },
      {
        title: { nl: "Mobiel eerst", en: "Mobile first" },
        desc: {
          nl: "Contact, aanvraag en route-informatie blijven bruikbaar op kleine schermen.",
          en: "Contact, request and route details remain usable on small screens.",
        },
      },
      {
        title: { nl: "Transparant portfolio-concept", en: "Transparent portfolio concept" },
        desc: {
          nl: "De site blijft discreet duidelijk over het fictionele portfolio-karakter.",
          en: "The site remains discreetly clear about its fictional portfolio nature.",
        },
      },
    ],
  },

  testimonials: {
    heading: {
      nl: "Wat de service uitstraalt",
      en: "What the service communicates",
    },
    intro: {
      nl: "Geen klantreviews of ratings, maar kernwaarden voor een premium chauffeurconcept.",
      en: "No customer reviews or ratings, just core values for a premium chauffeur concept.",
    },
    items: [
      {
        quote: {
          nl: "Rustige communicatie vanaf aanvraag tot aankomst.",
          en: "Calm communication from request to arrival.",
        },
        author: { nl: "Vooraf gepland", en: "Pre-booked" },
      },
      {
        quote: {
          nl: "Representatief vervoer voor zakelijke reizigers en gasten.",
          en: "Polished transport for business travellers and guests.",
        },
        author: { nl: "Zakelijk geschikt", en: "Business ready" },
      },
      {
        quote: {
          nl: "Comfortabel voor langere trajecten in en buiten Noord-Nederland.",
          en: "Comfortable for longer journeys in and beyond Northern Netherlands.",
        },
        author: { nl: "Lange afstand", en: "Long distance" },
      },
    ],
  },

  faq: {
    heading: { nl: "Veelgestelde vragen", en: "Frequently asked questions" },
    items: [
      {
        q: {
          nl: "Welke chauffeurdiensten staan centraal?",
          en: "Which chauffeur services are central?",
        },
        a: {
          nl: "De site is ingericht rond luchthaventransfers, business travel, langeafstandstrajecten en vooraf geplande privechauffeurservice.",
          en: "The site is structured around airport transfers, business travel, long-distance journeys and pre-booked private chauffeur service.",
        },
      },
      {
        q: {
          nl: "Kan ik een transfer naar Schiphol plannen?",
          en: "Can I plan a transfer to Schiphol?",
        },
        a: {
          nl: "Ja, Schiphol is een belangrijk voorbeeldtraject binnen dit chauffeurconcept, naast Eelde Airport, Groningen, Hoogezand en Assen.",
          en: "Yes, Schiphol is a key example journey within this chauffeur concept, alongside Eelde Airport, Groningen, Hoogezand and Assen.",
        },
      },
      {
        q: { nl: "Is zakelijk vervoer onderdeel van de service?", en: "Is business travel part of the service?" },
        a: {
          nl: "Ja, de content is geschreven voor zakelijke afspraken, hotelgasten, ontvangsten en representatieve transfers.",
          en: "Yes, the content is written for business appointments, hotel guests, hosted visitors and polished transfers.",
        },
      },
      {
        q: { nl: "Hoe werkt bevestiging?", en: "How does confirmation work?" },
        a: {
          nl: "Een aanvraag is geen automatische bevestiging. Het traject, de timing en de prijsindicatie worden eerst afgestemd.",
          en: "A request is not an automatic confirmation. The journey, timing and price estimate are coordinated first.",
        },
      },
      {
        q: {
          nl: "Is dit een echt vervoersbedrijf?",
          en: "Is this a real transport company?",
        },
        a: {
          nl: "Nee. Noordlijn Chauffeurs is een fictioneel portfolio-concept voor ontwerp- en ontwikkelpresentatie.",
          en: "No. Noordlijn Chauffeurs is a fictional portfolio concept for design and development showcase purposes.",
        },
      },
    ],
  },

  finalCta: {
    heading: {
      nl: "Plan uw chauffeurstraject",
      en: "Plan your chauffeur journey",
    },
    sub: {
      nl: "Vraag een airport transfer, zakelijk traject of langeafstandstraject aan met duidelijke afstemming vooraf.",
      en: "Request an airport transfer, business journey or long-distance route with clear coordination in advance.",
    },
    ctaCall: { nl: "Bel nu", en: "Call Now" },
    ctaWhatsapp: { nl: "WhatsApp", en: "WhatsApp" },
    ctaBook: { nl: "Transfer plannen", en: "Plan a Transfer" },
  },

  bookPage: {
    title: { nl: "Transfer plannen", en: "Plan a Transfer" },
    intro: {
      nl: "Vul het formulier in om een chauffeurstraject of airport transfer voor Noordlijn Chauffeurs samen te stellen.",
      en: "Fill in the form to compose a chauffeur journey or airport transfer for Noordlijn Chauffeurs.",
    },
    noticeTitle: { nl: "Let op", en: "Please note" },
    notice: {
      nl: "Een aanvraag is geen automatische bevestiging. Traject, timing en prijsindicatie worden eerst afgestemd.",
      en: "A request is not an automatic confirmation. Journey, timing and price estimate are coordinated first.",
    },
    labelName: { nl: "Naam", en: "Name" },
    labelPhone: { nl: "Telefoonnummer", en: "Phone number" },
    labelEmail: { nl: "E-mail (optioneel)", en: "Email (optional)" },
    labelPickup: { nl: "Ophaallocatie", en: "Pickup location" },
    labelDestination: { nl: "Bestemming", en: "Destination" },
    labelDate: { nl: "Datum", en: "Date" },
    labelTime: { nl: "Tijd", en: "Time" },
    labelPassengers: { nl: "Aantal passagiers", en: "Number of passengers" },
    labelLuggage: { nl: "Bagage (optioneel)", en: "Luggage (optional)" },
    labelRideType: { nl: "Type traject", en: "Journey type" },
    labelNotes: { nl: "Opmerkingen (optioneel)", en: "Notes (optional)" },
    rideTypes: {
      local: { nl: "Chauffeurservice op afspraak", en: "Pre-booked chauffeur service" },
      airport: { nl: "Luchthaventransfer", en: "Airport transfer" },
      station: { nl: "Langeafstandstraject", en: "Long-distance journey" },
      hospital: { nl: "Eelde Airport transfer", en: "Eelde Airport transfer" },
      business: { nl: "Business travel", en: "Business travel" },
      other: { nl: "Maatwerk chauffeurservice", en: "Custom chauffeur service" },
    },
    confirmCheckbox: {
      nl: "Ik begrijp dat mijn aanvraag pas bevestigd is na persoonlijke afstemming.",
      en: "I understand my request is only confirmed after personal coordination.",
    },
    submit: { nl: "Aanvraag versturen", en: "Send request" },
    successTitle: { nl: "Aanvraag samengesteld", en: "Request composed" },
    successText: {
      nl: "Uw aanvraag is samengesteld. Gebruik WhatsApp of e-mail om de trajectgegevens te delen.",
      en: "Your request has been composed. Use WhatsApp or email to share the journey details.",
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
    title: { nl: "Chauffeurdiensten", en: "Chauffeur Services" },
    intro: {
      nl: "Noordlijn Chauffeurs is gepositioneerd als premium chauffeurconcept voor airport transfers, business travel, langeafstandstrajecten en vooraf geplande priveverplaatsingen vanuit Groningen.",
      en: "Noordlijn Chauffeurs is positioned as a premium chauffeur concept for airport transfers, business travel, long-distance journeys and pre-booked private transport from Groningen.",
    },
    bookBtn: { nl: "Transfer plannen", en: "Plan a Transfer" },
    whatsappBtn: { nl: "Offerte aanvragen", en: "Request Quote" },
    sections: [
      {
        icon: "✈️",
        title: { nl: "Schiphol & Eelde Airport", en: "Schiphol & Eelde Airport" },
        desc: {
          nl: "Vooraf geplande luchthaventransfers vanuit Groningen, Hoogezand, Assen en Noord-Nederland.",
          en: "Pre-booked airport transfers from Groningen, Hoogezand, Assen and Northern Netherlands.",
        },
      },
      {
        icon: "💼",
        title: { nl: "Business travel", en: "Business Travel" },
        desc: {
          nl: "Representatieve chauffeurservice voor afspraken, directie, hotelgasten en zakelijke ontvangsten.",
          en: "Polished chauffeur service for appointments, executives, hotel guests and hosted visitors.",
        },
      },
      {
        icon: "🕴️",
        title: { nl: "Privechauffeur", en: "Private Chauffeur" },
        desc: {
          nl: "Geplande priveverplaatsingen voor diners, events en persoonlijke afspraken met rustige afstemming vooraf.",
          en: "Planned private travel for dinners, events and personal appointments with calm coordination in advance.",
        },
      },
      {
        icon: "🧳",
        title: { nl: "Hotel & station", en: "Hotel & Station" },
        desc: {
          nl: "Ophalen bij hotels, stations en adressen met ruimte voor bagage- en aankomstinformatie.",
          en: "Pickups at hotels, stations and addresses with room for luggage and arrival details.",
        },
      },
      {
        icon: "🛣️",
        title: { nl: "Langeafstandstrajecten", en: "Long-Distance Journeys" },
        desc: {
          nl: "Comfortabele chauffeurstrajecten vanuit Groningen en Noord-Nederland naar bestemmingen verder weg.",
          en: "Comfortable chauffeur journeys from Groningen and Northern Netherlands to destinations farther afield.",
        },
      },
    ],
  },

  contactPage: {
    title: { nl: "Contact", en: "Contact" },
    intro: {
      nl: "Neem contact op voor een airport transfer, zakelijk traject of langeafstandschauffeurservice vanuit Groningen.",
      en: "Get in touch for an airport transfer, business journey or long-distance chauffeur service from Groningen.",
    },
    callBtn: { nl: "Bel nu", en: "Call Now" },
    whatsappBtn: { nl: "WhatsApp", en: "WhatsApp" },
    emailBtn: { nl: "E-mail sturen", en: "Send email" },
    serviceAreaHeading: { nl: "Servicegebied", en: "Service area" },
    mapPlaceholder: { nl: "Bekijk Groningen op Google Maps", en: "View Groningen on Google Maps" },
    urgentNote: {
      nl: "Vooraf plannen geeft de meeste ruimte voor goede afstemming van route, timing en bagage.",
      en: "Planning ahead gives the most room for proper coordination of route, timing and luggage.",
    },
  },

  privacyPage: {
    title: { nl: "Privacyverklaring", en: "Privacy Policy" },
  },

  termsPage: {
    title: { nl: "Boekingsvoorwaarden", en: "Booking Terms" },
  },

  footer: {
    serviceArea: { nl: "Servicegebied", en: "Service area" },
    privacyLink: { nl: "Privacyverklaring", en: "Privacy Policy" },
    termsLink: { nl: "Boekingsvoorwaarden", en: "Booking Terms" },
    disclaimer: {
      nl: "Portfolio demonstratiewebsite. Noordlijn Chauffeurs is een fictioneel merk voor ontwerp- en ontwikkelshowcase.",
      en: "Portfolio demonstration website. Noordlijn Chauffeurs is a fictional brand created for design and development showcase purposes.",
    },
    rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
    tagline: {
      nl: "Premium chauffeurservice en airport transfers vanuit Groningen.",
      en: "Premium chauffeur service and airport transfers from Groningen.",
    },
  },

  stickyBar: {
    call: { nl: "Bellen", en: "Call" },
    whatsapp: { nl: "WhatsApp", en: "WhatsApp" },
    book: { nl: "Plan", en: "Plan" },
  },
} as const;

/** Helper to pick the right language string */
export function tx(field: { nl: string; en: string }, lang: Lang): string {
  return field[lang];
}
