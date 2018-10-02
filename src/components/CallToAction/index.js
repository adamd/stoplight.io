import React from 'react';
import { Link } from 'react-static';
import cn from 'classnames';

const CallToAction = ({
  name,
  color = 'purple',
  className,
  href = 'https://next.stoplight.io/join',
}) => {
  if (!name) return null;

  const cta = (
    <div
      className={`Button rounded shadow-md flex select-none inline-flex justify-center font-bold leading-reset h-xl text-xl rounded z-0 hover:z-5 border-transparent text-white hover:text-white bg-${color} hover:bg-${color}-light cursor-pointer solid`}
    >
      <div className="flex items-center px-6">{name}</div>
    </div>
  );

  return (
    <div className={cn(className)}>
      {href.startsWith('/') ? <Link to={href}>{cta}</Link> : <a href={href}>{cta}</a>}
    </div>
  );
};

export default CallToAction;