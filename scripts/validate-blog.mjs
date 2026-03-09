import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const requiredFiles = [
  'astro.config.mjs',
  'src/content.config.ts',
  'src/layouts/BaseLayout.astro',
  'src/pages/index.astro',
  'src/pages/blog/index.astro',
  'src/pages/blog/[slug].astro'
];

const missing = requiredFiles.filter((file) => !existsSync(file));
if (missing.length > 0) {
  console.error('Missing required Astro blog files:');
  missing.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

const contentDir = 'src/content/blog';
if (!existsSync(contentDir)) {
  console.error('Missing blog content directory: src/content/blog');
  process.exit(1);
}

const posts = readdirSync(contentDir).filter((file) => file.endsWith('.md'));
if (posts.length < 1) {
  console.error('Expected at least one Markdown post in src/content/blog');
  process.exit(1);
}

const requiredFrontmatter = ['title:', 'description:', 'pubDate:'];
for (const post of posts) {
  const body = readFileSync(join(contentDir, post), 'utf8');
  const hasFrontmatter = body.startsWith('---\n');

  if (!hasFrontmatter) {
    console.error(`${post} is missing frontmatter.`);
    process.exit(1);
  }

  for (const field of requiredFrontmatter) {
    if (!body.includes(`\n${field}`) && !body.startsWith(`---\n${field}`)) {
      console.error(`${post} is missing required field: ${field.replace(':', '')}`);
      process.exit(1);
    }
  }
}

console.log(`Validated ${posts.length} blog post(s) and Astro blog structure.`);
