import React, { FC, ReactNode } from "react";
import style from './container.module.css';

type Props = {
	children: ReactNode
  }

const Container: FC<Props> = ({children}) => {
	return (
		<div className={style.container}>
			{children}
		</div>
	);
};

export default Container