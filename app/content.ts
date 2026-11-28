export const company = 'Call Me Finance Solutions'
export const facebook =
  'https://www.facebook.com/people/Call-Me-Finance-Solutions/100085114699187/'
export const primary = {
  name: 'Madeleine Roos',
  number: '083 303 2807',
  dial: '27833032807',
}
export const secondary = {
  name: 'Additional contact',
  number: '083 276 4669',
  dial: '27832764669',
}

export function whatsapp(
  message = 'Hi Call Me Finance Solutions, I’d like to discuss vehicle finance.',
  phone = primary.dial,
) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export const navigation = [
  ['/', 'Home'],
  ['/about/', 'About Us'],
  ['/services/', 'Finance Solutions'],
  ['/apply/', 'Apply for Finance'],
  ['/faq/', 'Finance FAQ'],
  ['/checklist/', 'Checklist'],
  ['/contact/', 'Contact'],
] as const

export const vehicles = [
  { name: 'Cars', enquiry: 'car finance', copy: 'Explore finance for a car that suits your commute, family or next adventure.' },
  { name: 'Bakkies', enquiry: 'finance for a bakkie', copy: 'Discuss finance for a bakkie for work, weekends or a bit of both.' },
  { name: 'Bikes', enquiry: 'motorcycle finance', copy: 'Speak to the team about financing a motorcycle for everyday riding or weekend trips.' },
  { name: 'Trailers', enquiry: 'trailer finance', copy: 'Ask about finance for a trailer for work, transport or leisure.' },
  { name: 'Caravans', enquiry: 'caravan finance', copy: 'Talk through finance options for a caravan and plan your next trip.' },
  { name: 'Boats', enquiry: 'boat finance', copy: 'Discuss boat finance before you commit to a purchase.' },
] as const

export const services = [
  {
    id: 'vehicle-finance',
    name: 'Vehicle finance',
    copy: 'Talk through financing a vehicle you plan to buy and find out what information you’ll need to get started.',
  },
  {
    id: 'private-to-private-finance',
    name: 'Private-to-private finance',
    copy: 'Buying directly from a private seller? We’ll guide you through the finance process and what both parties need to prepare.',
  },
  {
    id: 'vehicle-refinancing',
    name: 'Vehicle refinancing',
    copy: 'Already own a vehicle? Ask the team whether refinancing could suit your circumstances.',
  },
] as const

export const documents = [
  'Three months of payslips, if employed',
  'Three months of bank statements',
  'Valid South African ID',
  'Valid driver’s licence',
] as const
