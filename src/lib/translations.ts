/**
 * translations.ts
 * All visible copy for the website in Dutch (nl) and English (en).
 * Keep business data (phone, email) in business.ts — only copy/text here.
 */

export type Lang = "nl" | "en";

export const t = {
  nav: {
    home: { nl: "Home", en: "Home" },
    book: { nl: "Rit reserveren", en: "Reserve a Ride" },
    services: { nl: "Onze diensten", en: "Our Services" },
    contact: { nl: "Contact", en: "Contact" },
  },

  hero: {
    title: {
      nl: "Comfortabel taxivervoer in Groningen & Hoogezand",
      en: "Comfortable taxi service in Groningen & Hoogezand",
    },
    subtitle: {
      nl: "Reis met een ervaren persoonlijke chauffeur die de regio Groningen en routes door heel Nederland goed kent.",
      en: "Travel with a personal chauffeur who knows the Groningen region and routes throughout the Netherlands.",
    },
    support: {
      nl: "Voor lokale ritten, luchthavenvervoer, zakelijke afspraken en vervoer op afspraak.",
      en: "For local rides, airport transfers, business appointments and planned transport.",
    },
    ctaCall: { nl: "Bel nu", en: "Call now" },
    ctaWhatsapp: { nl: "WhatsApp", en: "WhatsApp" },
    ctaBook: { nl: "Rit reserveren", en: "Reserve a Ride" },
    urgentNote: {
      nl: "Beschikbaar voor luchthavenvervoer, zakelijke reizen en privé ritten.",
      en: "Available for airport transfers, business travel and private rides.",
    },
    trustBadge: {
      nl: "Persoonlijk vervoer op afspraak",
      en: "Personal transport by appointment",
    },
    popularRides: {
      nl: "Veelgevraagde ritten:",
      en: "Popular destinations:",
    },
    ctaMicrocopy: {
      nl: "Spoedrit? Bel direct. Rit vooruit plannen? Stuur WhatsApp of reserveer online.",
      en: "Urgent ride? Call directly. Planning ahead? Send WhatsApp or reserve online.",
    },
  },

  trustStrip: {
    items: [
      {
        icon: "👨‍✈️",
        label: { nl: "Ervaren chauffeur", en: "Experienced driver" },
      },
      {
        icon: "🚗",
        label: { nl: "Mercedes comfort", en: "Mercedes comfort" },
      },
      {
        icon: "✈️",
        label: { nl: "Luchthavenvervoer", en: "Airport transfers" },
      },
      {
        icon: "✨",
        label: { nl: "Persoonlijk vervoer", en: "Personal transport" },
      },
      {
        icon: "📍",
        label: { nl: "Regio Groningen", en: "Groningen based" },
      },
      {
        icon: "📱",
        label: { nl: "Eenvoudig boeken", en: "Easy booking" },
      },
    ],
  },

  howItWorks: {
    heading: { nl: "Hoe het werkt", en: "How it works" },
    step1title: { nl: "1. Vraag uw rit aan", en: "1. Request your ride" },
    step1desc: {
      nl: "Reserveer online, stuur een WhatsApp of bel ons direct.",
      en: "Book online, send a WhatsApp, or call us directly.",
    },
    step2title: { nl: "2. Snelle bevestiging", en: "2. Fast confirmation" },
    step2desc: {
      nl: "Wij bevestigen uw rit en spreken eventueel vaste tarieven met u af.",
      en: "We confirm your ride and arrange fixed rates if applicable.",
    },
    step3title: { nl: "3. Reis in alle comfort", en: "3. Travel in comfort" },
    step3desc: {
      nl: "Uw chauffeur arriveert stipt op tijd in een representatieve Mercedes.",
      en: "Your driver arrives perfectly on time in a representative Mercedes.",
    },
    notice: {
      nl: "Boekingen worden handmatig bevestigd voor een gegarandeerde topservice.",
      en: "Bookings are manually confirmed to guarantee top-tier service.",
    },
  },

  meetDriver: {
    heading: {
      nl: "Een vertrouwd gezicht achter het stuur",
      en: "A familiar face behind the wheel",
    },
    body: {
      nl: "Bij VioTaxi heeft u direct contact met uw chauffeur. Geen onnodige tussenstappen, maar duidelijke afspraken en persoonlijk vervoer van deur tot deur. Met jarenlange ervaring kent Vio de regio Groningen, Hoogezand en routes door heel Nederland.",
      en: "With VioTaxi, you have direct contact with your chauffeur. No unnecessary steps, just clear arrangements and personal door-to-door transport. With years of experience, Vio knows Groningen, Hoogezand and routes throughout the Netherlands.",
    },
    points: [
      {
        nl: "Direct contact met uw chauffeur",
        en: "Direct contact with your chauffeur",
      },
      {
        nl: "Jarenlange ervaring",
        en: "Years of experience",
      },
      {
        nl: "Bekend met Groningen en heel Nederland",
        en: "Familiar with Groningen and the Netherlands",
      },
      {
        nl: "Comfortabel vervoer op afspraak",
        en: "Comfortable transport by appointment",
      },
    ],
  },

  vipService: {
    heading: { nl: "Persoonlijk vervoer, duidelijke afspraken", en: "Personal transport, clear arrangements" },
    intro: {
      nl: "VioTaxi is ontworpen voor passagiers die hechten aan kwaliteit en persoonlijke service. Geniet van een ontspannen reis met uw persoonlijke chauffeur en betrouwbare deur-tot-deur service.",
      en: "VioTaxi is designed for passengers who value quality and personal service. Enjoy a calm journey with your personal chauffeur and reliable door-to-door service.",
    },
    points: [
      {
        nl: "Comfortabel vervoer in Groningen en heel Nederland",
        en: "Comfortable transport in Groningen and throughout the Netherlands",
      },
      {
        nl: "Reizen in alle rust met uw persoonlijke chauffeur",
        en: "Travel in peace with your personal chauffeur",
      },
      {
        nl: "Punctuele, discrete en professionele service",
        en: "Punctual, discreet, and professional service",
      },
      {
        nl: "Direct en persoonlijk contact — geen callcenter",
        en: "Direct and personal contact — no call center",
      },
      {
        nl: "Betrouwbaar luchthavenvervoer en zakelijke ritten",
        en: "Reliable airport transfers and business rides",
      },
      {
        nl: "Heldere afspraken zonder onverwachte kosten",
        en: "Clear arrangements without unexpected costs",
      },
    ],
  },

  mercedes: {
    heading: { nl: "Comfortabel reizen met VioTaxi", en: "Comfortable travel with VioTaxi" },
    body: {
      nl: "Stap in een schone, comfortabele Mercedes en geniet van een ontspannen reis met uw persoonlijke chauffeur die stiptheid, discretie en veilig rijden hoog in het vaandel heeft staan.",
      en: "Step into a clean, comfortable Mercedes and enjoy a relaxed journey with your personal chauffeur who values punctuality, discretion and safe driving.",
    },
  },

  services: {
    heading: { nl: "Onze diensten", en: "Our services" },
    items: [
      {
        icon: "💼",
        title: { nl: "Zakelijk Vervoer", en: "Business Transport" },
        desc: {
          nl: "Comfortabel en discreet vervoer voor zakelijke afspraken, congressen of events in Groningen en daarbuiten.",
          en: "Comfortable and discreet transport for business meetings, conferences, or events in Groningen and beyond.",
        },
      },
      {
        icon: "✈️",
        title: { nl: "Luchthavenvervoer", en: "Airport Transfers" },
        desc: {
          nl: "Zorgeloze ritten van en naar Groningen Airport Eelde, Schiphol, Bremen Airport en Düsseldorf.",
          en: "Worry-free transfers to and from Groningen Airport Eelde, Schiphol, Bremen, and Düsseldorf.",
        },
      },
      {
        icon: "🚗",
        title: { nl: "Particulier Vervoer", en: "Private Taxi Service" },
        desc: {
          nl: "Representatief en comfortabel vervoer voor iedereen die waarde hechten aan stiptheid en betrouwbaarheid.",
          en: "Professional and comfortable transport for anyone who values punctuality and reliability.",
        },
      },
      {
        icon: "👑",
        title: { nl: "Mercedes Comfort", en: "Mercedes Comfort" },
        desc: {
          nl: "Een schone, comfortabele Mercedes-ervaring met extra ruimte en een professionele chauffeur.",
          en: "A clean, comfortable Mercedes experience with extra room and a professional driver.",
        },
      },
    ],
  },

  groningenVervoer: {
    heading: { nl: "Vervoer vanuit Groningen en Hoogezand", en: "Transport from Groningen and Hoogezand" },
    intro: {
      nl: "Of u nu een betrouwbare taxi in de regio nodig heeft, een comfortabele luchthaventransfer of vervoer voor een zakelijke afspraak, VioTaxi biedt een soepele en professionele ervaring van ophaallocatie tot bestemming.",
      en: "Whether you need a reliable taxi in the region, a comfortable airport transfer or transport for a business appointment, VioTaxi provides a smooth and professional experience from pickup to destination.",
    },
  },

  whyUs: {
    heading: { nl: "Waarom VioTaxi?", en: "Why VioTaxi?" },
    points: [
      {
        title: { nl: "Een vertrouwd gezicht achter het stuur", en: "A familiar face behind the wheel" },
        desc: {
          nl: "Geen wisselende gezichten, maar reizen met uw vaste, persoonlijke chauffeur.",
          en: "No changing faces, but traveling with your regular, personal chauffeur.",
        },
      },
      {
        title: { nl: "Direct contact, zonder tussenstap", en: "Direct contact, no middlemen" },
        desc: {
          nl: "Geen callcenters of onduidelijkheden. U communiceert rechtstreeks met uw chauffeur.",
          en: "No call centers or confusion. You communicate directly with your chauffeur.",
        },
      },
      {
        title: { nl: "Rustige, duidelijke communicatie", en: "Calm, clear communication" },
        desc: {
          nl: "Duidelijke afspraken vooraf, zodat u altijd weet waar u aan toe bent.",
          en: "Clear arrangements in advance, so you always know what to expect.",
        },
      },
      {
        title: { nl: "Comfortabel vervoer op afspraak", en: "Comfortable planned transport" },
        desc: {
          nl: "Reis in alle rust in een schone, comfortabele auto. Altijd stipt op tijd.",
          en: "Travel peacefully in a clean, comfortable car. Always right on time.",
        },
      },
      {
        title: { nl: "Zakelijk vervoer & ritten op maat", en: "Tailored business travel" },
        desc: {
          nl: "Representatief vervoer voor congressen, hotels, en zakelijke afspraken in de regio.",
          en: "Representative transport for conferences, hotels, and business appointments in the region.",
        },
      },
    ],
  },

  faq: {
    heading: { nl: "Veelgestelde vragen", en: "Frequently asked questions" },
    items: [
      {
        q: { nl: "Biedt u premium taxidiensten aan in Groningen?", en: "Do you offer premium taxi service in Groningen?" },
        a: {
          nl: "Ja, VioTaxi is gespecialiseerd in premium particulier en zakelijk taxivervoer in Groningen. Onze service is betrouwbaar, comfortabel en volledig afgestemd op uw wensen.",
          en: "Yes, VioTaxi specializes in premium private and business taxi transport in Groningen. Our service is reliable, comfortable, and fully tailored to your requirements.",
        },
      },
      {
        q: { nl: "Kan ik een luchthavenvervoer boeken van Groningen naar Schiphol?", en: "Can I book an airport transfer from Groningen to Schiphol?" },
        a: {
          nl: "Zeker. Wij verzorgen comfortabele vliegveldritten van Groningen naar Schiphol, Groningen Airport Eelde, Bremen Airport en andere luchthavens.",
          en: "Absolutely. We provide comfortable airport transfers from Groningen to Schiphol, Groningen Airport Eelde, Bremen Airport, and other national or international destinations.",
        },
      },
      {
        q: { nl: "Kan ik zakelijk vervoer aanvragen?", en: "Can I request business transport?" },
        a: {
          nl: "Ja, wij bieden representatief en professioneel zakelijk vervoer voor directieleden, zakenrelaties en evenementen in en rond Groningen.",
          en: "Yes, we offer representative and professional business transport for executives, business partners, and corporate events in and around Groningen.",
        },
      },
      {
        q: { nl: "Hoe boek ik een rit?", en: "How do I book a ride?" },
        a: {
          nl: "U kunt eenvoudig en snel boeken door ons te bellen of een bericht te sturen via WhatsApp. Voor geplande ritten kunt u ook ons online boekingsformulier invullen.",
          en: "You can book quickly by calling us or sending a WhatsApp message. For planned rides, you can also fill out our online booking form.",
        },
      },
      {
        q: { nl: "Biedt u vaste prijzen voor luchthavenvervoer?", en: "Do you offer fixed prices for airport transfers?" },
        a: {
          nl: "Wij kunnen vooraf een heldere prijsindicatie of vast tarief met u bespreken voor langere ritten en luchthavenvervoer, zodat u precies weet waar u aan toe bent.",
          en: "We can discuss a clear price estimate or fixed rate in advance for long-distance trips and airport transfers, ensuring you know exactly what to expect.",
        },
      },
    ],
  },

  finalCta: {
    heading: { nl: "Reis comfortabel met VioTaxi", en: "Travel in Comfort with VioTaxi" },
    sub: {
      nl: "Heeft u een betrouwbare taxi in Groningen nodig? Reserveer uw rit direct online of neem contact met ons op.",
      en: "Need a reliable taxi in Groningen? Book your ride online now or contact us directly.",
    },
    ctaCall: { nl: "Bel nu", en: "Call now" },
    ctaWhatsapp: { nl: "WhatsApp", en: "WhatsApp" },
    ctaBook: { nl: "Rit reserveren", en: "Reserve a Ride" },
  },

  bookPage: {
    title: { nl: "Rit reserveren", en: "Book a Ride" },
    intro: {
      nl: "Vul het formulier in om een ritaanvraag te sturen. VioTaxi neemt daarna contact met u op om de rit te bevestigen.",
      en: "Fill in the form to send a booking request. VioTaxi will then contact you to confirm the ride.",
    },
    noticeTitle: { nl: "Let op", en: "Please note" },
    notice: {
      nl: "Een ingevuld formulier is een aanvraag, geen directe bevestiging. Uw rit is bevestigd nadat VioTaxi contact met u heeft opgenomen.",
      en: "A submitted form is a request, not an automatic confirmation. Your ride is confirmed after VioTaxi contacts you.",
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
      airport: { nl: "Luchthavenvervoer", en: "Airport transfer" },
      station: { nl: "Station", en: "Train station" },
      hospital: { nl: "Ziekenhuisafspraak", en: "Hospital appointment" },
      business: { nl: "Zakelijk vervoer", en: "Business ride" },
      other: { nl: "Anders", en: "Other" },
    },
    confirmCheckbox: {
      nl: "Ik begrijp dat mijn rit pas bevestigd is nadat VioTaxi contact met mij heeft opgenomen.",
      en: "I understand that my ride is only confirmed after VioTaxi has contacted me.",
    },
    submit: { nl: "Aanvraag versturen", en: "Send request" },
    successTitle: { nl: "Aanvraag ontvangen!", en: "Request received!" },
    successText: {
      nl: "Bedankt voor uw aanvraag. VioTaxi neemt zo snel mogelijk contact met u op om de rit te bevestigen. Uw aanvraag is nog niet bevestigd.",
      en: "Thank you for your request. VioTaxi will contact you as soon as possible to confirm the ride. Your request is not yet confirmed.",
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
    title: { nl: "Onze diensten", en: "Our services" },
    intro: {
      nl: "VioTaxi biedt betrouwbare, hoogwaardige taxidiensten in Groningen en daarbuiten. Of het nu gaat om zakelijk vervoer, luchthavenvervoer of particulier vervoer — u reist comfortabel met een ervaren chauffeur.",
      en: "VioTaxi provides reliable, high-quality taxi services in Groningen and beyond. Whether it is business transport, airport transfers, or private rides — you travel comfortably with an experienced driver.",
    },
    bookBtn: { nl: "Rit reserveren", en: "Reserve a Ride" },
    whatsappBtn: { nl: "Vraag via WhatsApp", en: "Ask via WhatsApp" },
    sections: [
      {
        icon: "🚗",
        title: { nl: "Particulier Vervoer", en: "Private Taxi Service" },
        desc: {
          nl: "Comfortabele en betrouwbare taxiritten voor gasten en particulieren die extra waarde hechten aan een uitstekende service en persoonlijke aandacht.",
          en: "Comfortable and reliable taxi journeys for passengers who value excellent service and dedicated personal attention.",
        },
      },
      {
        icon: "✈️",
        title: { nl: "Luchthavenvervoer", en: "Airport Transfers" },
        desc: {
          nl: "Zorgeloze en uiterst betrouwbare ritten naar Groningen Airport Eelde, Schiphol, Bremen Airport of andere bestemmingen. Wij plannen uw vertrektijd ruim in.",
          en: "Worry-free and exceptionally reliable transfers to Groningen Airport Eelde, Schiphol, Bremen, or other destinations.",
        },
      },
      {
        icon: "💼",
        title: { nl: "Zakelijk Vervoer", en: "Business Transport" },
        desc: {
          nl: "Representatief en professioneel vervoer voor zakelijke bijeenkomsten, directieleden, hotelgasten en corporate events in heel Groningen en omstreken.",
          en: "Prestigious and highly professional transport for business meetings, executives, hotel guests, and corporate events across Groningen.",
        },
      },
      {
        icon: "👑",
        title: { nl: "Mercedes Comfort & Klasse", en: "Mercedes Comfort & Style" },
        desc: {
          nl: "Reis in een schone, hoogwaardig uitgeruste Mercedes-Benz. Geniet van de rust en ruimte aan boord van een luxe wagen.",
          en: "Travel in a spotless, premium-equipped Mercedes-Benz. Enjoy peace, quietness, and generous legroom.",
        },
      },
      {
        icon: "🛣️",
        title: { nl: "Langeafstandsritten", en: "Long-Distance Rides" },
        desc: {
          nl: "Luxe interstedelijk privévervoer vanuit Groningen naar elke bestemming. Geniet van een ontspannen, continue reis.",
          en: "Premium intercity private transport from Groningen to any destination. Enjoy a smooth, uninterrupted journey.",
        },
      },
    ],
  },

  contactPage: {
    title: { nl: "Contact", en: "Contact" },
    intro: {
      nl: "Neem gerust contact op. Voor spoedritten is bellen het snelst.",
      en: "Feel free to get in touch. For urgent rides, calling is the fastest.",
    },
    callBtn: { nl: "Bel ons", en: "Call us" },
    whatsappBtn: { nl: "WhatsApp", en: "WhatsApp" },
    emailBtn: { nl: "E-mail sturen", en: "Send email" },
    serviceAreaHeading: { nl: "Rijgebied", en: "Service area" },
    mapPlaceholder: { nl: "Bekijk op Google Maps", en: "View on Google Maps" },
    urgentNote: {
      nl: "Voor spoedritten: bel direct. Online aanvragen worden zo snel mogelijk verwerkt.",
      en: "For urgent rides: call directly. Online requests are processed as soon as possible.",
    },
  },

  privacyPage: {
    title: { nl: "Privacyverklaring", en: "Privacy Policy" },
  },

  termsPage: {
    title: { nl: "Boekingsvoorwaarden", en: "Booking Terms" },
  },

  footer: {
    serviceArea: { nl: "Rijgebied", en: "Service area" },
    privacyLink: { nl: "Privacyverklaring", en: "Privacy Policy" },
    termsLink: { nl: "Boekingsvoorwaarden", en: "Booking Terms" },
    disclaimer: {
      nl: "Ritaanvragen zijn pas bevestigd nadat VioTaxi contact met u heeft opgenomen.",
      en: "Booking requests are only confirmed after VioTaxi contacts you.",
    },
    rights: { nl: "Alle rechten voorbehouden.", en: "All rights reserved." },
    tagline: {
      nl: "Jarenlange ervaring op de Nederlandse wegen.",
      en: "Years of experience on Dutch roads.",
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
