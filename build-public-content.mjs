import { readFile, writeFile } from 'node:fs/promises';

const niches = JSON.parse(await readFile('nichos.json', 'utf8'));
const formats = [
  n => `Error común en ${n.nicho}: competir sólo por precio. Explica el resultado: ${n.resultado}.`,
  n => `Pregunta para ${n.cliente}: ¿qué parte de este trabajo te está quitando más tiempo esta semana?`,
  n => `Oferta clara: ${n.entregable} por US$${n.precio}, con plazo y alcance definidos antes de empezar.`,
  n => `Objeción frecuente: “${n.objecion}”. Una propuesta concreta reduce la incertidumbre sin prometer resultados imposibles.`,
  n => `Antes de contratar ${n.nicho}, acuerda objetivo, entregables, fecha, revisiones y el siguiente paso.`,
];

const posts = Array.from({ length: 30 }, (_, index) => {
  const niche = niches[index % niches.length];
  return `## Día ${index + 1}: ${niche.nicho}\n\n${formats[index % formats.length](niche)}\n\nCTA: “Prueba el generador de propuestas gratis en el enlace de mi perfil.”\n`;
});

await writeFile('calendario.md', `# Calendario de contenido\n\nGenerado: ${new Date().toISOString().slice(0, 10)}. Personaliza cada ejemplo con experiencia real antes de publicarlo.\n\n${posts.join('\n')}`);
console.log('Generado calendario.md con 30 publicaciones.');
