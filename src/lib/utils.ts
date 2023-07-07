export function fomatReviewTitle(title: string): string {
  const lastIndex = title.lastIndexOf("\n");
  if (lastIndex === -1) {
    return title.trim(); // No newline found, return the original string
  }
  return title.slice(lastIndex + 1).trim(); //trim method is called to remove any leading or trailing whitespace
}