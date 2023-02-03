import React, { FC, ReactNode } from "react";
import { ContainerTypes } from "../types/types";
import style from './container.module.css';

const Container: FC<ContainerTypes> = ({children}) => {
	return (
		<div className={style.container}>
			{children}
		</div>
	);
};

export default Container