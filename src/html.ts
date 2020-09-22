export default function html(
  html: TemplateStringsArray | string,
  ...placeholders: unknown[]
) {
  return String.raw(html as TemplateStringsArray, placeholders) as string;
}
