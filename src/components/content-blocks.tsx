import type { ContentBlock } from "@/data/services";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-service">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return <h3 key={i}>{block.text}</h3>;
        }
        if (block.type === "list") {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block.text}</p>;
      })}
    </div>
  );
}
