import parse from 'date-fns/parse'
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'

// Store today's date and hour
export const today = parse('03-04-2023 11:06', 'MM-dd-yyyy HH:mm', new Date())

// Create fictitious projects
export const projects = [
  { name: 'Project 1', category: 'Desktop', team: { engineers: ['Francis', 'Benny', 'Gerard'], lead: 'John DOE' }, profit: 5000, startedAt: subMonths(today, 35), endedAt: subMonths(today, 30) },
  { name: 'Project 2', category: 'Desktop', team: { engineers: ['Francis', 'Benny', 'Gerard'], lead: 'John DOE' }, profit: 3800, startedAt: subMonths(today, 30), endedAt: subMonths(today, 25) },
  { name: 'Project 3', category: 'Web', team: { engineers: ['Darrel', 'Loki', 'Beverly'], lead: 'Cyrus DOE' }, profit: 5000, startedAt: subMonths(today, 25), endedAt: subMonths(today, 21) },
  { name: 'Project 4', category: 'Web', team: { engineers: ['Darrel', 'Loki', 'Beverly'], lead: 'Cyrus DOE' }, profit: 9000, startedAt: subMonths(today, 21), endedAt: subMonths(today, 17) },
  { name: 'Project 5', category: 'Android', team: { engineers: ['Paul', 'Stanley', 'Tchegoun'], lead: 'Festus DOE' }, profit: 9500, startedAt: subMonths(today, 17), endedAt: subMonths(today, 13) },
  { name: 'Project 6', category: 'Android', team: { engineers: ['Paul', 'Stanley', 'Tchegoun'], lead: 'Festus DOE' }, profit: 10000, startedAt: subMonths(today, 13), endedAt: subMonths(today, 10) },
  { name: 'Project 7', category: 'iOS', team: { engineers: ['Nicolas', 'Amos'], lead: 'Jane DOE' }, profit: 10000, startedAt: subMonths(today, 10), endedAt: subMonths(today, 7) },
  { name: 'Project 8', category: 'iOS', team: { engineers: ['Nicolas', 'Amos'], lead: 'Jane DOE' }, profit: 12000, startedAt: subMonths(today, 7), endedAt: subMonths(today, 4) },
  { name: 'Project 9', category: 'iOS', team: { engineers: ['Nicolas', 'Amos'], lead: 'Jane DOE' }, profit: 15000, startedAt: subMonths(today, 4), endedAt: subMonths(today, 1) },
  { name: 'Project 10', category: 'Android', team: { engineers: ['Paul', 'Stanley', 'Tchegoun'], lead: 'Festus DOE' }, profit: 25000, startedAt: subMonths(today, 1), endedAt: addMonths(today, 5) }
]
// promise.then(data => console.log(data.text)).catch(err => console.error(err))
