import React from "react";

interface LazyLoadProps extends React.HTMLAttributes<HTMLDivElement> {
  offset: number;
  children: React.ReactNode;
}

/**
 * Component that lazy loads its children when it's scrolled into view.
 * @param offset The number of pixels before the element is scrolled into view to display the children.
 * @param children The children to display when the element is scrolled into view.
 * @param props Additional HTML attributes to apply to the div wrapper around `children`.
 */
export const LazyLoad: React.FC<LazyLoadProps> = ({
  offset,
  children,
  ...props
}) => {
  const [hasIntersected, setHasIntersected] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
        }
      },
      { threshold: 0, rootMargin: `${offset}px` }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [offset, setHasIntersected]);

  return (
    <div ref={ref} {...props}>
      {hasIntersected ? children : null}
    </div>
  );
};
