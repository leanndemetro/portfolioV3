import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import PrismaTutorial from '../../assets/tutorials/prisma-mysql-graphql';

const CodeBlock = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

export default function TutorialPage() {

    return (
        <article className="prose prose-lg prose-blue max-w-none">
        <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={CodeBlock}
            >
            <PrismaTutorial />
        </ReactMarkdown>
    </article>
    )
}