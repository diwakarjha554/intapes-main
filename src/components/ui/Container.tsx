'use client';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({
    children,
    className
}) => {
  return (
    <div className={`${className} max-w-[1750px]`}>
        {children}
    </div>
  )
}

export default Container;