import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function Title({ className, children, ...rest }: TitleProps) {
  return (
    <h2
      className={classNames(className, 'text-2xl paytone-font py-4')}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function BodyText({ className, ...rest }: TitleProps) {
  return (
    <p
      className={classNames(className, 'text-md font-normal')}
      {...rest}
    />
  );
}
